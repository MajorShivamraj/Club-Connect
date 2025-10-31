// src/components/dashboards/ClubDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ClubDashboard = () => {
  return (
    <div className='ful-dashboard-here'>
      <div className="dash-header">
        <h1 className="dash-title">Club Dashboard</h1>
        <Link to="/club/create-event" className="btn-dash-primary">
          + Create New Event
        </Link>
      </div>
      
      {/* --- Summary Cards --- */}
      <div className="dash-summary-grid">
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0F2FE'}}>🎉</span>
          <p>Total Events</p>
          <span className="summary-value">12</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#D1FAE5'}}>👥</span>
          <p>Registrations</p>
          <span className="summary-value">458</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#FEF9C3'}}>🚀</span>
          <p>Active Events</p>
          <span className="summary-value">2</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0E7FF'}}>👤</span>
          <p>Club Members</p>
          <span className="summary-value">35</span>
        </div>
      </div>

      {/* --- Event Management Table --- */}
      <div className="dash-tabs">
        <button className="dash-tab active">Manage Events</button>
      </div>

      <div className="dash-content-list">
        <div className="dash-table-container">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Registrations</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* This data would come from your backend */}
              <tr>
                <td>Tech Innovation Summit</td>
                <td>Oct 31, 2025</td>
                <td>150</td>
                <td><span className="status-badge upcoming">Upcoming</span></td>
                <td><button className="btn-dash-link">Edit</button></td>
              </tr>
              <tr>
                <td>CodeSprint 2.0</td>
                <td>Oct 15, 2025</td>
                <td>88</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td><button className="btn-dash-link">View</button></td>
              </tr>
              <tr>
                <td>Design Workshop</td>
                <td>Nov 02, 2025</td>
                <td>120</td>
                <td><span className="status-badge upcoming">Upcoming</span></td>
                <td><button className="btn-dash-link">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClubDashboard;
