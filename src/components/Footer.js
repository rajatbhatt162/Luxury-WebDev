import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <h3>Luxury WebDev</h3>
        <p>info@company.com</p>
        <div className="footer-social-icons">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#twitter" className="social-icon">Twitter</a>
          <a href="#behance" className="social-icon">Behance</a>
          <a href="#instagram" className="social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Website Development</li>
            <li>Business Growth</li>
            <li>Social Media Management</li>
            <li>Website Optimization</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Digital Marketing</li>
            <li>Backend Development</li>
            <li>Website Checkup</li>
            <li>Frontend Development</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe Newsletters</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Luxury WebDev. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
