import React from 'react';
import '../styles/Header.css';  // Correct path to CSS file

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <nav className="main-nav">
          <h1>Luxury WebDev</h1>
          {/* <a href="#top" className="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a> */}
          <ul className="nav">
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
          <div className="menu-trigger">
            <span>Menu</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
