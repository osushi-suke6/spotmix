import { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

interface IProps {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const searchBox = (props: IProps) => {
  return (
    <Box>
      <SearchIcon />
      <Input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </Box>
  );
};

const SearchBox = memo(searchBox);

const Box = styled.div`
  display: flex;
  width: 300px;
  position: relative;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.7rem 0.8rem 0.7rem 2.2rem;
  border: 1px solid #333;
  border-radius: 1.5rem;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: -0.05rem;
  left: 0;
  padding: 0.8rem 0.9rem 0.8rem 0.8rem;
  color: #333;
  font-size: 1rem;
  align-items: center;
`;

export default SearchBox;
