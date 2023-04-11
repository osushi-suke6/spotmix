import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import { REFRESH_KEY } from '../../consts';
import useSpotifyToken from '../../hooks/useSpotifyToken';
import PlayerContainer from '../containers/PlayerContainer';

const SpotmixPlayer = () => {
  console.log('spotmix player');

  const refreshToken = localStorage.getItem(REFRESH_KEY) ?? '';
  const [token, refresh] = useSpotifyToken(refreshToken);

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
        <PlayerContainer token={token} />
      </WebPlaybackSDK>
    </>
  );
};

export default SpotmixPlayer;
