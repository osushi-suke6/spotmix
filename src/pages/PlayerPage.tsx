import SpotmixPlayer from '../organisms/SpotmixPlayer';
import MainSideTemplate from '../templates/MainSideTemplate';

export default function PlayerPage() {
  return (
    <>
      <MainSideTemplate main={<SpotmixPlayer />} sidebar={<p>side</p>} />
    </>
  );
}
