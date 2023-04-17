import { createContext, memo, ReactNode, useCallback, useContext } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

import useSpotify, { ISpotifyApi } from '../../hooks/useSpotify';
import useSpotifyToken from '../../hooks/useSpotifyToken';

interface ISpotifyContext {
  token: string;
  refresh: () => Promise<string>;
  api: ISpotifyApi;
}

const SpotifyContext = createContext<ISpotifyContext | null>(null);

const useSpotifyContext = () => {
  return useContext(SpotifyContext);
};

interface IProps {
  children: ReactNode;
  refreshToken: string;
  volume?: number;
}

const spotifyProvider = (props: IProps) => {
  const [{ token }, refresh] = useSpotifyToken(props.refreshToken);
  const api = useSpotify(token);

  const getOAuthToken = useCallback(async (callback: (token: string) => void) => {
    const _token = await refresh();
    callback(_token);
  }, []);

  return (
    <SpotifyContext.Provider value={{ token, refresh, api }}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <WebPlaybackSDK
        initialDeviceName="Spotmix Player"
        initialVolume={props.volume ?? 0.5}
        getOAuthToken={getOAuthToken}
      >
        {props.children}
      </WebPlaybackSDK>
    </SpotifyContext.Provider>
  );
};

const SpotifyProvider = memo(spotifyProvider);

export { SpotifyProvider, useSpotifyContext };
