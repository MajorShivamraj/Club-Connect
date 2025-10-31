// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import old CSS (for homepage, login)
import './App.css'; 
// Import NEW CSS for dashboards
import './NewDashboard.css'; 

// Public Page Imports
import Homepage from './components/Homepage.jsx';
import Login from './components/Loggin.jsx';
import Signup from './components/Signup.jsx';

// Import the NEW Dashboard Layout
import DashboardLayout from './components/DashboardLayout.jsx';

// Import the 3 Dashboard Pages
import StudentDashboard from './components/dashboards/StudentDashboard.jsx';
import ClubDashboard from './components/dashboards/ClubDashboard.jsx';
import TeacherDashboard from './components/dashboards/TeacherDashboard.jsx';

// Import Specific Sub-Pages
import CreateEvent from './components/dashboards/CreateEvent.jsx';
// Placeholders for other pages
const StudentBadges = () => <div className="dash-title">My Badges</div>;
const StudentCertificates = () => <div className="dash-title">My Certificates</div>;
const ClubParticipants = () => <div className="dash-title">Event Participants</div>;
const TeacherInsights = () => <div className="dash-title">Student Insights</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* --- Student Routes (Nested) --- */}
        <Route 
          path="/student" 
          element={<DashboardLayout role="student" />}
        >
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="badges" element={<StudentBadges />} />
          <Route path="certificates" element={<StudentCertificates />} />
        </Route>

        {/* --- Club Routes (Nested) --- */}
        <Route 
          path="/club" 
          element={<DashboardLayout role="club" />}
        >
          <Route path="dashboard" element={<ClubDashboard />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="participants" element={<ClubParticipants />} />
        </Route>

        {/* --- Teacher Routes (Nested) --- */}
        <Route 
          path="/teacher" 
          element={<DashboardLayout role="teacher" />}
        >
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="insights" element={<TeacherInsights />} />
        </Route>
        
        {/* Fallback for old login redirect (we'll fix this with AuthContext) */}
        <Route path="/student-dashboard" element={<DashboardLayout role="student" ><StudentDashboard /></DashboardLayout>} />
        <Route path="/club-dashboard" element={<DashboardLayout role="club" ><ClubDashboard /></DashboardLayout>} />
        <Route path="/teacher-dashboard" element={<DashboardLayout role="teacher" ><TeacherDashboard /></DashboardLayout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
