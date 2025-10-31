// src/components/Signup.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  
  // --- Conditional Fields ---
  const [clubName, setClubName] = useState('');
  const [department, setDepartment] = useState('');
  
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // --- Collate data based on role ---
    let signupData = { fullName, email, password, role };
    if (role === 'club') {
      signupData.clubName = clubName;
    }
    if (role === 'teacher') {
      signupData.department = department;
    }

    // --- SIMULATE API CALL to register user ---
    console.log('Attempting signup with:', signupData);
    
    // On success:
    setMessage('Account created successfully! Redirecting...');
    
    // Redirect to the correct dashboard after a short delay
    setTimeout(() => {
      switch (role) {
        case 'student':
          navigate('/student-dashboard'); // Auto-login and redirect
          break;
        case 'club':
          navigate('/club-dashboard');
          break;
        case 'teacher':
          navigate('/teacher-dashboard');
          break;
        default:
          navigate('/login');
      }
    }, 2000); // 2-second delay
  };

  return (
    <div className="auth-container-multi">
      {/* --- 1. Left Visual Side (Consistent) --- */}
      <div className="auth-visual-side">
        <div className="auth-visual-content">
          <Link to="/" className="auth-logo-multi">
            ClubConnect
          </Link>
          <h2>Join the Community</h2>
          <p>One platform for all events, achievements, and connections on campus.</p>
          <div className="visual-placeholder auth-visual-placeholder">
            [Illustration of campus life or events]
          </div>
        </div>
      </div>
      
      {/* --- 2. Right Form Side --- */}
      <div className="auth-form-side">
        <div className="auth-form-box">
          <div className="auth-header">
            <h2>Create an Account</h2>
            <p>Get started by filling out the information below.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* --- Role Selector --- */}
            <div className="input-group">
              <label>I am a:</label>
              <div className="role-radio-group">
                <label>
                  <input type="radio" value="student" checked={role === 'student'} onChange={(e) => setRole(e.target.value)} />
                  Student
                </label>
                <label>
                  <input type="radio" value="club" checked={role === 'club'} onChange={(e) => setRole(e.target.value)} />
                  Club
                </label>
                <label>
                  <input type="radio" value="teacher" checked={role === 'teacher'} onChange={(e) => setRole(e.target.value)} />
                  Teacher
                </label>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            {/* --- Conditional Fields Logic --- */}
            {role === 'club' && (
              <div className="input-group">
                <label htmlFor="clubName">Club Name</label>
                <input type="text" id="clubName" value={clubName} onChange={(e) => setClubName(e.target.value)} placeholder="e.g., GDGC" />
              </div>
            )}
            
            {role === 'teacher' && (
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g., Computer Science" />
              </div>
            )}
            {/* --- End Conditional Fields --- */}
            
            <div className="input-group">
              <label htmlFor="password">Create Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            
            {/* --- Success Message --- */}
            {message && <p className="auth-success-message">{message}</p>}
            
            <button type="submit" className="btn btn-primary auth-btn">
              Create Account
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;