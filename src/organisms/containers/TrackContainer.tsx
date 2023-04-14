import { memo } from 'react';
import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';
import styled from 'styled-components';

import useSpotifyPlay from '../../hooks/useSpotifyPlay';
import Track from '../presentations/Track';
import { usePlaybackContext } from '../providers/PlaybackProvider';

interface IProps {
  track: string;
  artist: string;
  albumImgSrc: string;
  uri: string;
}

const TrackContainer = memo(function track(props: IProps) {
  const context = usePlaybackContext();
  const device = usePlayerDevice();
  const player = useSpotifyPlayer();
  const state = usePlaybackState();

  if (!context) return null;
  if (!device) return null;
  if (!player) return null;

  const { play, transfer } = useSpotifyPlay();
  const token = context.token;

  const handleClick = async () => {
    console.log(state);
    if (!state) {
      await transfer(token, device.device_id);
    }

    await play(token, [props.uri], device.device_id);
    await player.resume();
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
