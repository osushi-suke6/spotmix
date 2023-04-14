// To Be Deleted
import { createContext, ReactNode, useContext } from 'react';

import useSpotifyToken from '../../hooks/useSpotifyToken';

interface ITokenContext {
  token: string;
  refresh: () => Promise<string>;
}

const TokenContext = createContext<ITokenContext | null>(null);

const useTokenContext = () => {
  return useContext(TokenContext);
};

interface IProps {
  children: ReactNode;
  refreshToken: string;
}

const TokenProvider = (props: IProps) => {
  const [{ token }, refresh] = useSpotifyToken(props.refreshToken);

  return (
    <TokenContext.Provider value={{ token, refresh }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export { TokenProvider, useTokenContext };
