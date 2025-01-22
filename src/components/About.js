import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="\images\about-left-image.png" // Replace with your image URL
            alt="Two people working on a laptop"
          />
        </div>
        <div className="about-content">
          <h1>
            We Work With{" "}
            <span className="highlight">Small and Medium Businesses</span> &{" "}
            <span className="highlight">Online Stores </span>
            <span className="highlight">Personal Portfolios </span>
            <span className="highlight">Blogs </span>
            <span className="highlight">Startups </span>
          </h1>
          <p>
            We create exceptional static, dynamic, and responsive websites
            tailored to your business needs. With modern designs, optimized
            performance, SEO-friendly structure, and dedicated support, we
            ensure your website stands out and delivers a seamless user
            experience across all devices.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">11</span>
              <h3>Experience</h3>
              <p>We Have Team Of Full Stack WebDevlopers</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <h3>Websites</h3>
              <p>Dynamic and Static Websites.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <h3>Satisfied Clients</h3>
              <p>
                Our websites are optimized for speed, ensuring smooth user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
