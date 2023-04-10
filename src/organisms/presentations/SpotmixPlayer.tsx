import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import { REFRESH_KEY } from '../../consts';
import useSpotifyToken from '../../hooks/useSpotifyToken';
import PlayingTrack from '../../molecules/PlayingTrack';
import TogglePlay from '../../molecules/TogglePlay';

const SpotmixPlayer = () => {
  const refreshToken = localStorage.getItem(REFRESH_KEY) ?? '';
  const [, refresh] = useSpotifyToken(refreshToken);

  const getOAuthToken = useCallback(async (callback: (token: string) => void) => {
    const t = await refresh();
    callback(t);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <WebPlaybackSDK
        initialDeviceName="Spotmix Player"
        getOAuthToken={getOAuthToken}
        initialVolume={0.5}
      >
        <TogglePlay />
        <PlayingTrack />
      </WebPlaybackSDK>
    </>
  );
};

export default SpotmixPlayer;
