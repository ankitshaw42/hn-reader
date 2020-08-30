import React from 'react';

import './Layout.module.css';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
