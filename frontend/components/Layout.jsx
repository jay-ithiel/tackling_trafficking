import React from 'react';

// Components
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => (
  <div id="Layout">
    <Navbar/>
    <section id="Layout-content">{children}</section>
    <Footer/>
  </div>
);

export default Layout;
