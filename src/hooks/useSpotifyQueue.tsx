import { useCallback } from 'react';

export default function useSpotifyQueue() {
  const add = useCallback(async (uri: string, token: string) => {
    const url = 'https://api.spotify.com/v1/me/player/queue';
    const params = new URLSearchParams({ uri });

    await fetch(url + '?' + params, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  return add;
}
