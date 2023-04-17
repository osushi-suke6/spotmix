import { createContext, memo, ReactNode, useCallback, useContext } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import useSpotifyToken from '../../hooks/useSpotifyToken';

interface IPlaybackContext {
  token: string;
  refresh: () => Promise<string>;
}

const PlaybackContext = createContext<IPlaybackContext | null>(null);

const usePlaybackContext = () => {
  return useContext(PlaybackContext);
};

interface IProps {
  children: ReactNode;
  refreshToken: string;
  volume?: number;
}

const playbackProvider = (props: IProps) => {
  const [{ token }, refresh] = useSpotifyToken(props.refreshToken);

  const getOAuthToken = useCallback(async (callback: (token: string) => void) => {
    const _token = await refresh();
    callback(_token);
  }, []);

  return (
    <PlaybackContext.Provider value={{ token, refresh }}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <WebPlaybackSDK
        initialDeviceName="Spotmix Player"
        initialVolume={props.volume ?? 0.5}
        getOAuthToken={getOAuthToken}
      >
        {props.children}
      </WebPlaybackSDK>
    </PlaybackContext.Provider>
  );
};

const PlaybackProvider = memo(playbackProvider);

export { PlaybackProvider, usePlaybackContext };
