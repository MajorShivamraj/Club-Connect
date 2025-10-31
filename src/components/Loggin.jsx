// src/components/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext'; // You will add this later

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  // const { login } = useAuth(); // You will use this later
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- THIS IS WHERE YOU CALL YOUR API ---
    // 1. Send { email, password, role } to your backend.
    // 2. Your backend verifies the user and returns their data + a token.
    // 3. You would then call: login(userData, token);
    
    // --- FOR NOW: We'll simulate the redirect logic ---
    console.log('Logging in with:', { email, password, role });
    
    if (email && password) {
      // Based on the role, redirect to the correct dashboard
      switch (role) {
        case 'student':
          navigate('/student-dashboard');
          break;
        case 'club':
          navigate('/club-dashboard');
          break;
        case 'teacher':
          navigate('/teacher-dashboard');
          break;
        default:
          navigate('/'); // Fallback
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="auth-container-multi">
      {/* --- 1. Left Visual Side --- */}
      <div className="auth-visual-side">
        <div className="auth-visual-content">
          <Link to="/" className="auth-logo-multi">
            ClubConnect
          </Link>
          <h2>Welcome Back</h2>
          <p>Connecting students, clubs, and faculty for a more engaged campus life.</p>
          <div className="visual-placeholder auth-visual-placeholder">
            
          </div>
        </div>
      </div>
      
      {/* --- 2. Right Form Side --- */}
      <div className="auth-form-side">
        <div className="auth-form-box">
          <div className="auth-header">
            <h2>Login to your Account</h2>
            <p>Please enter your details to proceed.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            
            {/* --- Role Selector --- */}
            <div className="input-group">
              <label htmlFor="role">I am a</label>
              <select 
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="club">Club</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g., student@college.edu"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>

            <div className="auth-options">
              <div className="checkbox-group">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#" className="auth-link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary auth-btn">
              Login
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;