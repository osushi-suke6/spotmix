import { memo, useCallback } from 'react';
import styled from 'styled-components';

import PauseButton from '../atoms/PauseButton';
import PlayButton from '../atoms/PlayButton';

interface IProps {
  isPaused: boolean;
  onClick: () => void;
}

const togglePlayButton = (props: IProps) => {
  const handleClick = useCallback(() => {
    props.onClick();
  }, [props.onClick]);

  const button = props.isPaused ? <PlayButton /> : <PauseButton />;

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
