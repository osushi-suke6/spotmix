import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

import PauseButton from '../atoms/PauseButton';
import PlayButton from '../atoms/PlayButton';

interface IProps {
  isPlaying?: boolean;
  onClick: () => void;
}

const togglePlayButton = (props: IProps) => {
  const [isPlaying, setIsPlaying] = useState(props.isPlaying ?? false);

  const handleClick = useCallback(() => {
    props.onClick();
    setIsPlaying(!isPlaying);
  }, [props.onClick, isPlaying]);

  const button = isPlaying ? <PauseButton /> : <PlayButton />;

  return <Button onClick={handleClick}>{button}</Button>;
};

const TogglePlayButton = memo(togglePlayButton);

export default TogglePlayButton;

const Button = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
