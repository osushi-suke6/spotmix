import { useCallback, useState } from 'react';

import ISearchedTracks from '../interfaces/ISearchedTracks';

interface ISearchParams {
  q: string;
  offset?: string;
  limit?: string;
}

export default function useSpotifySearch() {
  const [result, setResult] = useState<ISearchedTracks | null>(null);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState('');

  const fetchNew = useCallback(async (query: string, token: string) => {
    const result = await search({ q: query }, token);

    setResult(result);
    setOffset(0);
  }, []);

  const fetchNext = useCallback(async (token: string) => {
    const args = { q: query, offset: offset.toString() };
    const result = await search(args, token);

    setResult(result);
    setOffset(offset + 1);
  }, []);

  const search = useCallback(async (args: ISearchParams, token: string) => {
    setQuery(args.q);

    const url = 'https://api.spotify.com/v1/search';
    const p = { ...args, type: 'track' };
    const params = new URLSearchParams(p);

    const res = await fetch(url + '?' + params, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return (await res?.json()) as ISearchedTracks;
  }, []);

  return { result, fetchNew, fetchNext };
}
