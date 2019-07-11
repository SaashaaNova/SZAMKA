import React from 'react';
import Navbar from './Navbar/Navbar';
import MainFrontPicture from './MainFrontPicture/MainFrontPicture';
import WhyUs from './WhyUs/WhyUs';
import Inspiration from './Inspiration/Inspiration';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


const LandingPage = () => (
  <div>
    <Navbar />
    <MainFrontPicture />
    <WhyUs />
    <Inspiration />
    <Contact />
    <Footer />
  </div>
);

export default LandingPage;
