import React from "react";
import "../styles/Banner.css"; // Ensure the CSS file path is correct

const Banner = () => {
  const phoneNumber = "+91 8126816455"; // You can dynamically update this if needed

  return (
    <div className="main-banner" id="top">
      <div className="col-lg-6">
        <div className="header-text">
          <h6>Welcome to Luxury WebDev</h6>
          <h2>
            Get your <em>Static or Dynamic website</em>
          </h2>
          <p>
            Transform your online presence with our professional and responsive
            website design solutions, tailored for your needs.
          </p>
          <div className="down-buttons">
            <a href="#contact" className="main-blue-button-hover">
              Message us Now
            </a>
            <a href={`tel:${phoneNumber}`} className="call-button">
              <i className="fa fa-phone"></i> {phoneNumber}
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="banner-image">
          <img
            src="/images/Banner.png"
            alt="Digital Solutions Banner for Luxury WebDev"
            loading="lazy" // Lazy load the image
          />
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
