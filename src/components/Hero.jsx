// src/components/Hero.js

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>All College Events, One Connected Platform.</h1>
          <p>
            Stay updated with every club’s event, register easily, and track
            your achievements.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-secondary">
              Explore Platform
            </a>
            <Link to="/login" className="btn btn-primary">
              Login / Sign Up
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          {/* This div acts as a placeholder for your illustration and paste the image here */}
          <div className="visual-placeholder">
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;