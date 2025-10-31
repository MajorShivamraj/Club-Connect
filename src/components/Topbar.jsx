// src/components/Topbar.jsx

import React from 'react';

const Topbar = ({ userName }) => {
  return (
    <header className="topbar">
      <div className="topbar-welcome">
        <h2>Welcome back, {userName}!</h2>
        <p>Here's what's happening on campus today.</p>
      </div>
      <div className="topbar-profile">
        <button className="icon-btn" aria-label="Notifications">
          <span>🔔</span>
          <span className="notification-badge">3</span>
        </button>
        <div className="profile-avatar">
          {/* Placeholder for profile pic */}
          <span>{userName.charAt(0)}</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;