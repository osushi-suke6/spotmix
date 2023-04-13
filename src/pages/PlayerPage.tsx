import { REFRESH_KEY } from '../consts';
import SearchForm from '../organisms/presentations/SearchForm';
import SpotmixPlayer from '../organisms/presentations/SpotmixPlayer';
import { TokenProvider } from '../organisms/providers/TokenProvider';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  const refreshToken = localStorage.getItem(REFRESH_KEY) ?? '';

  return (
    <>
      <TokenProvider refreshToken={refreshToken}>
        <MainSideTemplate
          header={'Spotmix'}
          main={<SearchForm />}
          sidebar={<p>side</p>}
          bottom={<SpotmixPlayer />}
          footer={'foot'}
        />
      </TokenProvider>
    </>
  );
}
