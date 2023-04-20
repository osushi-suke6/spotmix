import { useCallback } from 'react';

import { API_URI } from '../consts';

export interface ISpotifyApi {
  search: {
    search: () => Promise<void>;
    result: string[];
  };
  player: {
    startOrResume: (uris: string[], deviceId: string) => Promise<void>;
    transfer: (deviceId: string) => Promise<void>;
  };
}

const useSpotify = (token: string) => {
  const request = useCallback(
    async (url: string, method: 'PUT', body?: BodyInit) => {
      const res = await fetch(API_URI + url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body,
      });

      if (!res.ok) return Error('fetch is failed');

      return res;
    },
    [token],
  );

  const startOrResume = useCallback(
    async (uris: string[], deviceId: string) => {
      const url = `/me/player/play?device_id=${deviceId}`;
      const method = 'PUT';
      const body = JSON.stringify({
        device_id: deviceId,
        uris,
      });

      await request(url, method, body);
    },
    [request],
  );

  const transfer = useCallback(
    async (deviceId: string) => {
      const url = '/me/player';
      const method = 'PUT';
      const body = JSON.stringify({
        device_ids: [deviceId],
        play: true,
      });

      await request(url, method, body);
    },
    [request],
  );

  const api = { player: { startOrResume, transfer } } as ISpotifyApi;

  return api;
};

export default useSpotify;
