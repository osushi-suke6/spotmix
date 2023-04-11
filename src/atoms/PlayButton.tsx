import { memo } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styled from 'styled-components';

const playButton = () => {
  return (
    <Button>
      <FaPlayCircle />
    </Button>
  );
};

const PlayButton = memo(playButton);

export default PlayButton;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  width: 38px;
  height: 38px;
  border: none;
  background: none;
  color: white;
`;
