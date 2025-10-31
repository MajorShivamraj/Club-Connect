// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-header">
      <nav className="container navbar">
        <a href="#home" className="navbar-logo">
          ClubConnect
        </a>
        <div 
          className="navbar-hamburger" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <div>
            <ul className="navbar-menu">
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#how-it-works" onClick={toggleMobileMenu}>How It Works</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
            </ul>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>

          <div className="navbar-buttons">
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;