// src/components/DashboardLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar.jsx';


const DashboardLayout = ({ role }) => {
  // In a real app, you'd get user data from AuthContext
  const userData = {
    student: { name: 'Student Name', roleInfo: 'Contributor' },
    club: { name: 'Club Name', roleInfo: 'Event Organizer' },
    teacher: { name: 'Teacher Name', roleInfo: 'Faculty Advisor' },
  };

  return (
    <div className="new-dash-container">
      <ProfileSidebar 
        role={role} 
        user={userData[role]}
      />
      <main className="new-dash-main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;
