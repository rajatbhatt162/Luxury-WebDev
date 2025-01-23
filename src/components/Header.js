// Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        {/* <img src="/path-to-logo.png" alt="NIX Logo" /> */}
        <span>Luxury WebDev</span>
      </div>
      <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#videos">Videos</a></li> */}
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <button className="header__contact-btn">Contact Us Now</button>
      <div className="header__menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

