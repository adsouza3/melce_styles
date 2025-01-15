import React from 'react';

import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-content">
        {children}
      </div>
    </>
  )
};

export default Layout;