import { useCallback } from 'react';

const URL = 'https://api.spotify.com/v1';

export interface ISpotifyApi {
  search: {
    search: () => Promise<void>;
    result: string[];
  };
  player: {
    startOrResume: (uris: string[], deviceId: string) => Promise<void>;
    transfer: () => Promise<void>;
  };
}

const useSpotify = (token: string) => {
  const startOrResume = useCallback(async (uris: string[], deviceId: string) => {
    await fetch(URL + '/me/player/play' + '?device_id=' + deviceId, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        device_id: deviceId,
        uris,
      }),
    });
  }, []);

  const transfer = useCallback(async (token: string, deviceId: string) => {
    const url = 'https://api.spotify.com/v1/me/player/';

    await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: true,
      }),
    });
  }, []);

  const api = { player: { startOrResume, transfer } } as ISpotifyApi;

  return api;
};

export default useSpotify;
