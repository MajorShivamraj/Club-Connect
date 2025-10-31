// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title">What is ClubConnect?</h2>
          <p>
            ClubConnect unites all college clubs, from ITSA to GDGC, and students
            onto one single digital platform. It's designed to streamline
            event communication, simplify registration, and manage all your
            campus participation in one place.
          </p>
        </div>
        <div className="about-visual">
          {/* Placeholder for your abstract/infographic visual */}
          <div className="visual-placeholder small">
            [Infographic of students, clubs, and teachers]
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;