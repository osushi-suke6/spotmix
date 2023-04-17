import { memo } from 'react';
import { usePlayerDevice, useSpotifyPlayer } from 'react-spotify-web-playback-sdk';
import styled from 'styled-components';

import Track from '../presentations/Track';
import { useSpotifyContext } from '../providers/SpotifyProvider';

interface IProps {
  track: string;
  artist: string;
  albumImgSrc: string;
  uri: string;
}

const TrackContainer = memo(function track(props: IProps) {
  const device = usePlayerDevice();
  const player = useSpotifyPlayer();

  const context = useSpotifyContext();

  if (!context) return null;
  if (!device) return null;
  if (!player) return null;

  const startOrResume = context.api.player.startOrResume;

  const handleClick = async () => {
    console.log('play');
    await player.activateElement();
    await startOrResume([props.uri], device.device_id);

    //await play(token, [props.uri], device.device_id);
  };

  return (
    <Container onClick={handleClick}>
      <Track {...props} />
    </Container>
  );
});

export default TrackContainer;

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
