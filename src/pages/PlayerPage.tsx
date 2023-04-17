import { REFRESH_KEY } from '../consts';
import PlayerContainer from '../organisms/containers/PlayerContainer';
import SearchForm from '../organisms/presentations/SearchForm';
import { SpotifyProvider } from '../organisms/providers/SpotifyProvider';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  console.log('PlayerPage');
  const refreshToken = localStorage.getItem(REFRESH_KEY);

  if (!refreshToken) return <p>Authentication Failed</p>;

  return (
    <>
      <SpotifyProvider refreshToken={refreshToken}>
        <MainSideTemplate
          header={'🚧 spotmix 🚧'}
          main={<SearchForm />}
          sidebar={<p>🚧 sidebar 🚧</p>}
          bottom={<PlayerContainer />}
          footer={'🚧footer🚧'}
        />
      </SpotifyProvider>
    </>
  );
}
