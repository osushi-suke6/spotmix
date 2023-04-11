import { useCallback } from 'react';

export default function useSpotifyPlay() {
  const play = useCallback(async (token: string) => {
    const url = 'https://api.spotify.com/v1/me/player/play';

    await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  return play;
}
