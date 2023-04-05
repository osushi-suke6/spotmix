import { ReactNode } from 'react';

interface IProps {
  header?: ReactNode;
  main: ReactNode;
  sidebar: ReactNode;
  bottom?: ReactNode;
  footer?: ReactNode;
}

export default function MainSideBottomTemplate({
  header,
  main,
  sidebar,
  bottom,
  footer,
}: IProps) {
  return (
    <>
      {header && <header>{header}</header>}
      <div style={{ display: 'flex' }}>
        <main>{main}</main>
        {sidebar && <aside>{sidebar}</aside>}
      </div>
      {bottom && <div id="bottom">{bottom}</div>}
      {footer && <footer>{footer}</footer>}
    </>
  );
}
