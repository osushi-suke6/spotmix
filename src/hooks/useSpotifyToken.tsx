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

const useSpotifyToken = (initRefreshToken: string) => {
  const t = localStorage.getItem(ACCESS_KEY) ?? '';
  const [token, setToken] = useState(t);
  const [refreshToken, setRefreshToken] = useState(initRefreshToken);

  useEffect(() => {
    localStorage.setItem(ACCESS_KEY, token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem(REFRESH_KEY, refreshToken);
  }, [refreshToken]);

  const refresh = useCallback(async () => {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
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

    //if (!res.ok) throw Error('Refresh Failed');

    const json = (await res.json()) as IResult;

    console.log(json);

    setToken(json.access_token);
    setRefreshToken(json.refresh_token);

    return json.access_token;
  }, [refreshToken]);

  return [{ token, refreshToken }, refresh] as const;
};

export default useSpotifyToken;
