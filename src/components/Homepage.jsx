// src/components/Homepage.js

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import HowItWorks from './HowItWorks';
import SneakPeek from './SneakPeek';
import CTA from './CTA';
import Footer from './Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <SneakPeek />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;