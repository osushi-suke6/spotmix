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
  height: 70px;
  padding: 6px 6px 0 6px;
  width: 100%;
  box-sizing: border-box;
  background: blue;
`;

const SImageContainer = styled.div`
  width: 64px;
  height: 64px;
`;

const SContainer = styled.div`
  width: 100%;
  flex-direction: column;
  background: red;
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
  color: gray;
`;
