import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import PlayingTrack from '../../molecules/PlayingTrack';
import TogglePlay from '../../molecules/TogglePlay';

const SpotmixPlayer = () => {
  const getOAuthToken = useCallback((callback: any) => {
    const token = localStorage.getItem('access-token') ?? '';
    console.log('aaa');
    console.log(token);
    callback(token);
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
