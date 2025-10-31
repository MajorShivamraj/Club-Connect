// src/components/dashboards/StudentDashboard.jsx

import React, { useState } from 'react';
0
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('joined');

  return (
    <div className='ful-dashboard-here'>
      <div className="dash-header">
        <h1 className="dash-title">Dashboard</h1>
        <button className="btn-dash-primary">My Achievements</button>
      </div>
      
      {/* --- Summary Cards --- */}
      <div className="dash-summary-grid">
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0F2FE'}}>🎉</span>
          <p>Events Joined</p>
          <span className="summary-value">1</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#FEE2E2'}}></span>
          <p>Events Missed</p>
          <span className="summary-value">0</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#FEF9C3'}}>🛡️</span>
          <p>Badges</p>
          <span className="summary-value">1</span>
        </div>
        <div className="dash-summary-card">
          <span className="summary-icon" style={{background: '#E0E7FF'}}>📜</span>
          <p>Certificates</p>
          <span className="summary-value">0</span>
        </div>
      </div>

      {/* --- Tabs --- */}
      <div className="dash-tabs">
        <button 
          className={`dash-tab ${activeTab === 'joined' ? 'active' : ''}`}
          onClick={() => setActiveTab('joined')}
        >
          Events Joined
        </button>
        <button 
          className={`dash-tab ${activeTab === 'missed' ? 'active' : ''}`}
          onClick={() => setActiveTab('missed')}
        >
          Events Missed
        </button>
      </div>

      {/* --- Event Cards List --- */}
      <div className="dash-content-list">
        {activeTab === 'joined' ? (
          <div className="dash-event-card">
            <div className="event-card-left">
              <img 
                src="https://placehold.co/180x150/2563EB/FFFFFF?text=Event+Poster" 
                alt="Event Poster" 
              />
              <div className="event-card-details">
                <h3 className="event-title">Deviathon</h3>
                <p className="event-host">Hackathons</p>
                <p className="event-desc">About Dev@thon 2025...</p>
                <div className="event-team">
                  <span>Team:</span>
                  <span className="team-avatar">A</span>
                  <span className="team-avatar">B</span>
                  <button className="btn-dash-link">View Team &gt;</button>
                </div>
              </div>
            </div>
            <div className="event-card-right">
              <span className="event-date">SEP 15, 2025</span>
              <button className="btn-dash-secondary">Leave</button>
            </div>
          </div>
        ) : (
          <p>No missed events.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
