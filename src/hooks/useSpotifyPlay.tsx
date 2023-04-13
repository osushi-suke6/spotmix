import { useCallback } from 'react';

export default function useSpotifyPlay() {
  const play = useCallback(async (token: string, uris: string[], deviceId?: string) => {
    const url = 'https://api.spotify.com/v1/me/player/play';

    await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        //device_id: deviceId,
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

  return { play, transfer };
}
