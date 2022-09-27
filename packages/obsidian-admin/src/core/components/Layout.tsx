import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Topbar from './Topbar';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <Topbar />
      <Sidebar/>
      <Content>
        {children}
      </Content>
    </>
  );
}

export default Layout;
