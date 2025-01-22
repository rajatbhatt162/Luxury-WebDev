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
      <div className="footer-bottom">
        <p>Copyright © 2025 Luxury WebDev. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
