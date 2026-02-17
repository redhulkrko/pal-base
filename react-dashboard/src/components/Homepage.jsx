import React from 'react';
import NavbarHome from './NavbarHome';
import Carousel from './Carousel';
import QuickBook from './QuickBook';
import ShowingsSection from './ShowingsSection';
import FooterHome from './FooterHome';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="container px-0 shell">
      <NavbarHome />
      <Carousel />
      <QuickBook />
      <ShowingsSection />
      <FooterHome />
    </div>
  );
};

export default Homepage;
