import { memo } from 'react';
import styled from 'styled-components';

import Card from '../../atoms/Card';

interface IProps {
  track: string;
  artist: string;
  albumImgSrc: string;
}

const Track = memo(function track(props: IProps) {
  const play = () => {
    console.log(`play ${props.track}`);
  };

  return (
    <TrackContainer onClick={play}>
      <Card title={props.track} description={props.artist} imageSrc={props.albumImgSrc} />
    </TrackContainer>
  );
});

export default Track;

const TrackContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
