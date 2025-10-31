// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>ClubConnect</h3>
          <p>Connecting students, clubs, and faculty for a more engaged campus life.</p>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="#about">Our Mission</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">support@clubconnect.edu</a></li>
            <li><a href="#">Pimpri Chinchwad College of Engineering, Akurdi Pune</a></li>
          </ul>
          <div className="social-media">
            {/* Replace with actual icons */}
            <a href="#" aria-label="Facebook" id="facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="Twitter" id='twit'><i class="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" id='insta'><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ClubConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;