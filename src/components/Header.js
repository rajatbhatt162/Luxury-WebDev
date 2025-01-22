import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <nav className="main-nav">
          <h1>Luxury WebDev</h1>
          <ul className={`nav ${menuOpen ? 'active' : ''}`}>
            <li><a href="#top" className="active">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#video">Videos</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li>
              <div className="main-red-button-hover">
                <a href="#contact">Contact Us Now</a>
              </div>
            </li>
          </ul>
          {/* Hamburger menu icon */}
          <div className="menu-trigger" onClick={toggleMenu}>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
