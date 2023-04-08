import { useState } from 'react';

import ISearchedTracks from '../interfaces/ISearchedTracks';

interface ISearchParams {
  q: string;
  limit?: string;
  offset?: string;
}

export default function useSpotifySearch() {
  const [result, setResult] = useState<ISearchedTracks | null>(null);

  const search = async (query: ISearchParams, token: string) => {
    const url = 'https://api.spotify.com/v1/search';
    const q = { ...query, type: 'track' };
    const params = new URLSearchParams(q);

    const res = await fetch(url + '?' + params, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = (await res?.json()) as ISearchedTracks;

    setResult(json);
  };

  return { result, search };
}
