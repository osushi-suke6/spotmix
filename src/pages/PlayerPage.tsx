import { REFRESH_KEY } from '../consts';
import SearchForm from '../organisms/presentations/SearchForm';
import SpotmixPlayer from '../organisms/presentations/SpotmixPlayer';
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
          header={'Spotmix'}
          main={<SearchForm />}
          sidebar={<p>side</p>}
          bottom={<SpotmixPlayer />}
          footer={'foot'}
        />
      </SpotifyProvider>
    </>
  );
}
