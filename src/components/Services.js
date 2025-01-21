import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div id="services" className="our-services section">
      <div className="services-right-dec">
        <img src="assets/images/services-right-dec.png" alt="" />
      </div>
      <div className="container">
        <div className="services-left-dec">
          <img src="assets/images/services-left-dec.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                We <em>Provide</em> The Best Service With <span>Our Tools</span>
              </h2>
              <span>Our Services</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-services">
              {[
                {
                  title: "Learn More about our Guidelines",
                  icon: "assets/images/service-icon-01.png",
                  text: "Feel free to use this template for your business",
                },
                {
                  title: "Develop The Best Strategy for Business",
                  icon: "assets/images/service-icon-02.png",
                  text: "Get to know more about the topic in details",
                },
                // Add all other items here...
              ].map((item, index) => (
                <div className="item" key={index}>
                  <h4>{item.title}</h4>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
