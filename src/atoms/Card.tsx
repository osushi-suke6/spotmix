import styled from 'styled-components';

interface IProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Card(props: IProps) {
  return (
    <SCard>
      <SImageContainer>
        <img src={props.imageSrc} alt={props.title} />
      </SImageContainer>
      <SContainer>
        <STitle>{props.title}</STitle>
        <SDesc>{props.description}</SDesc>
      </SContainer>
    </SCard>
  );
}

const SCard = styled.div`
  display: flex;
  margin: 0;
  height: 80px;
  padding: 3px 6px 3px 6px;
  width: 100%;
  box-sizing: border-box;
  background-color: #121212;
  border-radius: 8px;
  &:hover {
    background-color: #535353;
  }
`;

const SImageContainer = styled.div`
  width: 64px;
  height: 74px;
  display: flex;
  align-items: center;
`;

const SContainer = styled.div`
  width: 100%;
  flex-direction: column;
`;

const STitle = styled.div`
  margin: 0;
  padding: 0 0 0 0.5rem;
  font-weight: bold;
  height: 50%;
  display: flex;
  align-items: center;
  color: white;
`;

const SDesc = styled.div`
  margin: 0;
  padding: 0 0 0 0.5rem;
  height: 50%;
  display: flex;
  align-items: center;
  color: #b3b3b3;
`;
