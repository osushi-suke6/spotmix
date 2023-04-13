import { memo, useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import PlayerContainer from '../containers/PlayerContainer';
import { useTokenContext } from '../providers/TokenProvider';

const spotmixPlayer = () => {
  console.log('spotmix player');

  const tokenContext = useTokenContext();
  if (!tokenContext) return null;

  const { token, refresh } = tokenContext;

  const getOAuthToken = useCallback(
    async (callback: (token: string) => void) => {
      const _token = await refresh();
      callback(_token);
    },
    [token],
  );

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

const SpotmixPlayer = memo(spotmixPlayer);

export default SpotmixPlayer;
