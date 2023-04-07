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
  //padding-top: ${headerHeight};
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
  width: 80%;
  height: 100%;
  overflow-y: scroll;
`;

const SAside = styled.aside`
  width: 20%;
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
`;

const SBottom = styled.div`
  margin-top: auto;
`;

const SFooter = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 8px;
`;
