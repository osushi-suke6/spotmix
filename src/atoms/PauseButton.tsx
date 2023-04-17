import { memo } from 'react';
import { FaPauseCircle } from 'react-icons/fa';
import styled from 'styled-components';

const pauseButton = () => {
  return (
    <Button>
      <FaPauseCircle />
    </Button>
  );
};

const PauseButton = memo(pauseButton);

export default PauseButton;

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
