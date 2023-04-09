import { memo } from 'react';

import Card from '../../atoms/Card';

interface IProps {
  track: string;
  artist: string;
  albumImgSrc: string;
}

const Track = memo(function track(props: IProps) {
  return (
    <Card title={props.track} description={props.artist} imageSrc={props.albumImgSrc} />
  );
});

export default Track;
