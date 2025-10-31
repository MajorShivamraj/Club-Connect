// src/components/ProfileSidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

// Define navigation links for each role
const navLinks = {
  student: [
    { text: 'Home', path: '/student/dashboard', icon: '🏠' },
    { text: 'Badges', path: '/student/badges', icon: '🛡️' },
    { text: 'Certificates', path: '/student/certificates', icon: '📜' },
  ],
  club: [
    { text: 'Dashboard', path: '/club/dashboard', icon: '📊' },
    { text: 'Create Event', path: '/club/create-event', icon: '➕' },
    { text: 'Participants', path: '/club/participants', icon: '👥' },
  ],
  teacher: [
    { text: 'Dashboard', path: '/teacher/dashboard', icon: '📊' },
    { text: 'Insights', path: '/teacher/insights', icon: '🧠' },
    { text: 'Profile', path: '/teacher/profile', icon: '👤' },
  ],
};

const ProfileSidebar = ({ role, user }) => {
  const links = navLinks[role];

  return (
    <aside className="profile-sidebar">
      <div className="profile-card">
        <div className="profile-avatar-large">
          {/* Placeholder for avatar image */}
          <img 
            src={`https://placehold.co/120x120/5D9CFB/FFFFFF?text=${user.name.charAt(0)}`} 
            alt="Profile Avatar" 
          />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-role">({user.roleInfo})</p>
        
        <div className="profile-info">
          <p>📧 {role}@college.edu</p>
          <p>🎓 Pimpri Chinchwad College</p>
        </div>
      </div>
      
      <nav className="profile-nav">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'profile-nav-link active' : 'profile-nav-link'}
              >
                <span className="profile-nav-icon">{link.icon}</span>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="profile-sidebar-footer">
        <NavLink to="/login" className="profile-nav-link logout">
          <span className="profile-nav-icon">🚪</span>
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
