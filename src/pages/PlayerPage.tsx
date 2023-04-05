import SpotmixPlayer from '../organisms/SpotmixPlayer';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  return (
    <>
      <MainSideTemplate
        header={<p>head</p>}
        main={<p>main</p>}
        sidebar={<p>side</p>}
        bottom={<SpotmixPlayer />}
        footer={<p>foot</p>}
      />
    </>
  );
}
