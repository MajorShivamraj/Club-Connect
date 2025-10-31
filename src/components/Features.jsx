// src/components/Features.js

import React from 'react';

const Features = () => {
  // You can replace '...' with actual icon elements or <img> tags
  const features = [
    { 
      icon: '📢', 
      title: 'Instant Event Updates', 
      desc: 'Get real-time notifications from all your subscribed clubs.' 
    },
    { 
      icon: '🧾', 
      title: 'Easy Event Registration', 
      desc: 'Sign up for any event with just a single click.' 
    },
    { 
      icon: '🏆', 
      title: 'Participation Tracking', 
      desc: 'Build your profile with a record of all events and achievements.' 
    },
    { 
      icon: '👩‍🏫', 
      title: 'Faculty Notifications', 
      desc: 'Admins and teachers can easily monitor club activities.' 
    },
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title text-center">Why Use ClubConnect?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;