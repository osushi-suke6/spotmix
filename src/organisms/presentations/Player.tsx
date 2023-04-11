import { memo } from 'react';
import styled from 'styled-components';

import TogglePlayButton from '../../molecules/TogglePlayButton';

interface IProps {
  togglePlay: () => Promise<void>;
  isPaused: boolean;
  playingTrack: string;
  artist: string;
  imgSrc: string | null;
}

const player = (props: IProps) => {
  const image =
    props.imgSrc !== null ? (
      <img src={props.imgSrc} alt={props.playingTrack} width="64px" height="64px" />
    ) : null;

  return (
    <OperationBox>
      <DisplayBox>
        <AlbumImage>{image}</AlbumImage>
        <TrackInfo>
          <Track>{props.playingTrack}</Track>
          <Artist>{props.artist}</Artist>
        </TrackInfo>
      </DisplayBox>
      <ButtonBox>
        <TogglePlayButton
          isPaused={props.isPaused}
          onClick={async () => {
            props.togglePlay();
          }}
        />
      </ButtonBox>
    </OperationBox>
  );
};

const Player = memo(player);

export default Player;

const OperationBox = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const DisplayBox = styled.div`
  display: flex;
  padding: 0 8px;
`;

const AlbumImage = styled.div`
  height: 70px;
  width: 70px;
  padding: 3px;
  box-sizing: border-box;
`;

const TrackInfo = styled.div``;

const Track = styled.div`
  padding: 6px 6px;
  font-size: 16px;
`;
const Artist = styled.div`
  padding: 2px 6px;
  font-size: 14px;
  color: #b3b3b3;
`;
