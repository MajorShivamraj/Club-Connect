// src/components/HowItWorks.js

import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        <h2 className="section-title text-center">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">1</div>
            <h3>Sign Up</h3>
            <p>Create your student or faculty account in moments.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">2</div>
            <h3>Register for Events</h3>
            <p>Browse events from all clubs and register with one click.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">3</div>
            <h3>Track Achievements</h3>
            <p>View your participation history and build your co-curricular record.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;