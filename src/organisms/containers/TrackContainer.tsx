import { memo } from 'react';
import { usePlayerDevice } from 'react-spotify-web-playback-sdk';
import styled from 'styled-components';

import useSpotifyPlay from '../../hooks/useSpotifyPlay';
import Track from '../presentations/Track';
import { useTokenContext } from '../providers/TokenProvider';

interface IProps {
  track: string;
  artist: string;
  albumImgSrc: string;
  uri: string;
}

const TrackContainer = memo(function track(props: IProps) {
  //const device = usePlayerDevice();
  const context = useTokenContext();
  const { play, transfer } = useSpotifyPlay();

  if (!context) return null;
  //if (!device) return null;

  const { token } = context;

  const handleClick = async () => {
    //await transfer(token, '');
    await play(token, [props.uri]);
    console.log(`play ${props.track}`);
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
