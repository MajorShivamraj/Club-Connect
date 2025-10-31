// src/components/dashboards/CreateEvent.jsx

import React, { useState } from 'react';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventMode, setEventMode] = useState('offline');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get all form data
    const formData = new FormData(e.target);
    const eventData = Object.fromEntries(formData.entries());
    
    // --- API CALL ---
    // Here you would send eventData to your backend API
    // The backend saves it to MongoDB
    // The Student Dashboard will then fetch and display it
    
    console.log("Event Data to be sent:", eventData);
    alert('Event created successfully!');
    // Ideally, redirect back to club dashboard: navigate('/club/dashboard')
  };

  return (
    <div className="page-container">
      <div className="section-header">
        <h2>Create a New Event</h2>
      </div>
      
      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-card">
          <h3>Event Details</h3>
          
          <div className="input-group">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" id="eventName" name="eventName" required />
          </div>

          <div className="input-group">
            <label htmlFor="eventPoster">Event Poster/Banner</label>
            <input type="file" id="eventPoster" name="eventPoster" accept="image/*" />
          </div>

          <div className="input-group">
            <label htmlFor="eventDesc">Event Description & Rules</label>
            <textarea id="eventDesc" name="eventDesc" rows="5"></textarea>
          </div>
        </div>

        <div className="form-card">
          <h3>Logistics & Rules</h3>
          
          <div className="form-grid-2">
            <div className="input-group">
              <label htmlFor="startDate">Start Date & Time</label>
              <input type="datetime-local" id="startDate" name="startDate" required />
            </div>
            <div className="input-group">
              <label htmlFor="endDate">End Date & Time</label>
              <input type="datetime-local" id="endDate" name="endDate" required />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="input-group">
              <label>Event Mode</label>
              <div className="role-radio-group">
                <label>
                  <input type="radio" name="eventMode" value="offline" checked={eventMode === 'offline'} onChange={(e) => setEventMode(e.target.value)} />
                  Offline
                </label>
                <label>
                  <input type="radio" name="eventMode" value="online" checked={eventMode === 'online'} onChange={(e) => setEventMode(e.target.value)} />
                  Online
                </label>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="eventDomain">Domain</label>
              <input type="text" id="eventDomain" name="eventDomain" placeholder="e.g., Tech, Design, Business" />
            </div>
          </div>
          
          <div className="form-grid-2">
            <div className="input-group">
              <label htmlFor="teamSize">Team Size</label>
              <input type="number" id="teamSize" name="teamSize" defaultValue="1" min="1" />
            </div>
            {eventMode === 'offline' && (
              <div className="input-group">
                <label htmlFor="location">Location/Venue</label>
                <input type="text" id="location" name="location" placeholder="e.g., Auditorium" />
              </div>
            )}
            {eventMode === 'online' && (
              <div className="input-group">
                <label htmlFor="eventLink">Event Link</label>
                <input type="url" id="eventLink" name="eventLink" placeholder="e.g., Google Meet Link" />
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-large">
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;