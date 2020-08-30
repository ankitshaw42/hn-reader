import React from 'react';

import './Layout.module.css';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
