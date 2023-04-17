import { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  header?: ReactNode;
  main: ReactNode;
  sidebar: ReactNode;
  bottom?: ReactNode;
  footer?: ReactNode;
}

export default function MainSideBottomTemplate(props: IProps) {
  return (
    <SWrapper>
      {props.header && <SHeader>{props.header}</SHeader>}
      <SMiddle>
        <SMain className="main">{props.main}</SMain>
        {props.sidebar && <SAside>{props.sidebar}</SAside>}
      </SMiddle>
      <SBottomContainer>
        {props.bottom && <SBottom>{props.bottom}</SBottom>}
        {props.footer && <SFooter>{props.footer}</SFooter>}
      </SBottomContainer>
    </SWrapper>
  );
}

const headerHeight = '50px';
const bottomHeight = '180px';

const SWrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  padding-bottom: ${bottomHeight};
  box-sizing: border-box;
`;

const SHeader = styled.header`
  height: ${headerHeight};
`;

const SMiddle = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight} - ${bottomHeight}); ;
`;

const SMain = styled.main`
  width: 70%;
  height: 100%;
  //overflow-y: scroll;
`;

const SAside = styled.aside`
  width: 30%;
  height: 100%;
  //overflow-y: scroll;
`;

const SBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${bottomHeight};

  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-top: solid 1px #535353;
`;

const SBottom = styled.div`
  margin-top: auto;
  padding-bottom: 16px;
`;

const SFooter = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 8px;
  background-color: #1db954;
  color: black;
`;
