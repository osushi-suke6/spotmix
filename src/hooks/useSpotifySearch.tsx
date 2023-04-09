import { useCallback, useState } from 'react';

import ISearchedTracks from '../interfaces/ISearchedTracks';

interface ISearchParams {
  q: string;
  offset?: string;
  limit?: string;
}

export default function useSpotifySearch() {
  const [result, setResult] = useState<ISearchedTracks | null>(null);

  const search = useCallback(async (args: ISearchParams, token: string) => {
    const url = 'https://api.spotify.com/v1/search';
    const p = { ...args, type: 'track' };
    const params = new URLSearchParams(p);

    const res = await fetch(url + '?' + params, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = (await res?.json()) as ISearchedTracks;

    setResult(json);
  }, []);

  return [result, search] as const;
}
