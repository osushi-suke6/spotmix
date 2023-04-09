import SearchForm from '../organisms/presentations/SearchForm';
import SpotmixPlayer from '../organisms/presentations/SpotmixPlayer';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  return (
    <>
      <MainSideTemplate
        header={'Spotmix'}
        main={<SearchForm />}
        sidebar={<p>side</p>}
        bottom={<SpotmixPlayer />}
        footer={'foot'}
      />
    </>
  );
}
