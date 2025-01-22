import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="\images\about-left-image.png" // Replace with your image URL
            alt="Two people working on a laptop"
          />
        </div>
        <div className="about-content">
          <h1>
            Grow Your Website With Our <span className="highlight">SEO Tools</span> & <span className="highlight">Project Management</span>
          </h1>
          <p>
            You can browse free HTML templates on Too CSS website. Visit the
            website and explore the latest website templates for your projects.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">320</span>
              <h3>SEO Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">640</span>
              <h3>Websites</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">120</span>
              <h3>Satisfied Clients</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
