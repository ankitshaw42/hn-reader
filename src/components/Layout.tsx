import React, { ReactNode } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
