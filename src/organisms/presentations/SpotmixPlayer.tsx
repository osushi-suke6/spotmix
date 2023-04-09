import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

const SpotmixPlayer = () => {
  const token = localStorage.getItem('access-token') ?? '';
  const getOAuthToken = useCallback((callback: any) => callback(token), []);

  return (
    <WebPlaybackSDK
      initialDeviceName="Spotmix Player"
      getOAuthToken={getOAuthToken}
      initialVolume={0.5}
    ></WebPlaybackSDK>
  );
};

export default SpotmixPlayer;
