import { useCallback, useEffect, useState } from 'react';

import { ACCESS_KEY, CLIENT_ID, REFRESH_KEY } from '../consts';

interface IResult {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

const URL = 'https://accounts.spotify.com/api/token';

const useSpotifyToken = (refreshToken: string) => {
  const t = localStorage.getItem(ACCESS_KEY) ?? '';
  const [token, setToken] = useState(t);

  useEffect(() => {
    localStorage.setItem(ACCESS_KEY, token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem(REFRESH_KEY, refreshToken);
  }, []);

  const refresh = useCallback(async () => {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: localStorage.getItem(REFRESH_KEY) ?? '',
      client_id: CLIENT_ID,
    });

    const args = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    };

    const res = await fetch(URL, args);

    if (!res.ok) throw Error('Refresh Failed');

    const json = (await res.json()) as IResult;

    localStorage.setItem(REFRESH_KEY, json.refresh_token);
    setToken(json.access_token);

    return json.access_token;
  }, []);

  return [token, refresh] as const;
};

export default useSpotifyToken;
