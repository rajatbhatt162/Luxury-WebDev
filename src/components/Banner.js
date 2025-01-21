import React from 'react';
import '../styles/Banner.css';  // Correct path to CSS file

const Banner = () => {
  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-banner">
              <div className="item header-text">
                <h6>Welcome to Onix Digital</h6>
                <h2>Build <em>your website</em> the best in <span>SEO</span>?</h2>
                <p>This is a professional-looking HTML Bootstrap 5 website template brought to you by TemplateMo.</p>
                <div className="down-buttons">
                  <a href="#contact" className="main-blue-button-hover">Message Us Now</a>
                  <a href="tel:0100200340" className="call-button">
                    <i className="fa fa-phone"></i> 010-020-0340
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
