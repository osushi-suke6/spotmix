import SpotmixPlayer from '../organisms/SpotmixPlayer';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  return (
    <>
      <MainSideTemplate
        header={<h1>Spotmix</h1>}
        main={<p>main</p>}
        sidebar={<p>side</p>}
        bottom={<SpotmixPlayer />}
        footer={<p>foot</p>}
      />
    </>
  );
}
