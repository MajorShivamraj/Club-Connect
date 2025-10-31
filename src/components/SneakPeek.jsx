// src/components/SneakPeek.js

import React from 'react';

const SneakPeek = () => {
  return (
    <section id="sneak-peek" className="section sneak-peek-section">
      <div className="container sneak-peek-container">
        <div className="peek-visual">
          {/* This placeholder represents the blurred dashboard mockups */}
          <div className="mockup-placeholder">
            
          </div>
        </div>
        <div className="peek-content">
          <h2 className="section-title">See What's Inside</h2>
          <p>
            Login to explore event dashboards, manage your registrations, and
            track your participation.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;