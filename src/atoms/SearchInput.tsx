import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

interface IProps {
  placeholder?: string;
}

export default function SearchInput(props: IProps) {
  const SBox = styled.div`
    display: flex;
    width: 300px;
    position: relative;
  `;

  const SInput = styled.input`
    flex-grow: 1;
    padding: 0.7rem 0.8rem 0.7rem 2.2rem;
    border: 1px solid #333;
    border-radius: 1.5rem;
  `;

  const SFaSearch = styled(FaSearch)`
    position: absolute;
    top: -0.05rem;
    left: 0;
    padding: 0.8rem 0.9rem 0.8rem 0.8rem;
    color: #333;
    font-size: 1rem;
    align-items: center;
  `;

  return (
    <>
      <SBox>
        <SFaSearch />
        <SInput type="text" placeholder={props.placeholder} />
      </SBox>
    </>
  );
}
