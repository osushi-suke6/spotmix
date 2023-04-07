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
    <>
      {props.header && <SHeader>{props.header}</SHeader>}
      <Flex>
        <SMain className="main">{props.main}</SMain>
        {props.sidebar && <SAside>{props.sidebar}</SAside>}
      </Flex>
      <SBottom>
        {props.bottom && <div id="bottom">{props.bottom}</div>}
        {props.footer && <footer>{props.footer}</footer>}
      </SBottom>
    </>
  );
}

const SHeader = styled.header``;

const Flex = styled.div`
  display: flex;
`;

const SMain = styled.main`
  width: 80%;
  overflow-y: scroll;
`;

const SAside = styled.aside`
  width: 20%;
`;

const SBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
