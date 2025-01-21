import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="our-portfolio section">
      <div className="portfolio-left-dec">
        <img src="assets/images/portfolio-left-dec.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span>
              </h2>
              <span>Our Portfolio</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-portfolio">
              {/* Map through project data */}
              {[
                {
                  image: "assets/images/portfolio-01.jpg",
                  title: "First Project",
                  category: "Plot Listing",
                },
                // Add other projects here
              ].map((project, index) => (
                <div className="item" key={index}>
                  <div className="thumb">
                    <img src={project.image} alt="" />
                    <div className="hover-effect">
                      <div className="inner-content">
                        <h4>{project.title}</h4>
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
