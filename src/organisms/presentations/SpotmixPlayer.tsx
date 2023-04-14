import { memo } from 'react';

import PlayerContainer from '../containers/PlayerContainer';
import { usePlaybackContext } from '../providers/PlaybackProvider';

const spotmixPlayer = () => {
  console.log('spotmix player');

  const context = usePlaybackContext();

  return (
    <>
      <PlayerContainer token={context?.token ?? ''} />
    </>
  );
};

const SpotmixPlayer = memo(spotmixPlayer);

export default SpotmixPlayer;
