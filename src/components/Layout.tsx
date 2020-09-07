import React, { ReactNode } from 'react';

import Navbar from './Header';
import Pagination from './Pagination';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Pagination />
      <main>{children}</main>
    </>
  );
};

export default Layout;
