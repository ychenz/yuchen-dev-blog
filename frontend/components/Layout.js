import React from 'react';
import Header from './Header';
import Navigation from "./Navigation";
import Footer from './Footer';

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
