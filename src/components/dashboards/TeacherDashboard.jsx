// src/components/dashboards/TeacherDashboard.jsx

import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className='ful-dashboard-here'>
      <div className="dash-header">
        <h1 className="dash-title">Teacher Dashboard</h1>
        <button className="btn-dash-primary">Export Report</button>
      </div>
      
      {/* --- Summary Cards --- */}
      <div className="dash-summary-grid">
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#D1FAE5'}}>👥</span>
          <p>Total Students</p>
          <span className="summary-value">250</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#FEF9C3'}}>🚀</span>
          <p>Active Events</p>
          <span className="summary-value">5</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0F2FE'}}>🎉</span>
          <p>Total Participation</p>
          <span className="summary-value">670</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0E7FF'}}>🏛️</span>
          <p>Active Clubs</p>
          <span className="summary-value">8</span>
        </div>
      </div>

      {/* --- Student Participation Table --- */}
      <div className="dash-tabs">
        <button className="dash-tab active">Student Participation</button>
      </div>

      <div className="dash-content-list">
        {/* Filter Bar */}
        <div className="dash-filter-bar">
          <select>
            <option value="">All Departments</option>
            <option value="cs">Computer Science</option>
          </select>
          <select>
            <option value="">All Clubs</option>
            <option value="itsa">ITSA</option>
          </select>
        </div>

        <div className="dash-table-container">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Event</th>
                <th>Club</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alex Johnson</td>
                <td>Tech Innovation Summit</td>
                <td>ITSA</td>
                <td>Oct 31, 2025</td>
                <td><span className="status-badge registered">Registered</span></td>
              </tr>
              <tr>
                <td>Maria Garcia</td>
                <td>CodeSprint 2.0</td>
                <td>GDGC</td>
                <td>Oct 15, 2025</td>
                <td><span className="status-badge attended">Attended</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
