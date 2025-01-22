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
                  title: "Custom Web Development Solutions",
                  icon: "assets/images/service-icon-03.png",
                  text: "Tailored web solutions to meet your business needs.",
                },
                {
                  title: "24/7 Customer Support",
                  icon: "assets/images/service-icon-04.png",
                  text: "Reliable support whenever you need assistance.",
                },
                {
                  title: "SEO Optimization Services",
                  icon: "assets/images/service-icon-05.png",
                  text: "Increase your website's visibility with expert SEO strategies.",
                },
                {
                  title: "Mobile App Development",
                  icon: "assets/images/service-icon-06.png",
                  text: "Create intuitive and powerful mobile apps for your business.",
                },
                {
                  title: "Cloud Hosting Solutions",
                  icon: "assets/images/service-icon-07.png",
                  text: "Secure and scalable cloud hosting for your business.",
                },
                {
                  title: "E-Commerce Development",
                  icon: "assets/images/service-icon-08.png",
                  text: "Build a strong online presence with a customized e-commerce platform.",
                },
                {
                  title: "UI/UX Design Expertise",
                  icon: "assets/images/service-icon-09.png",
                  text: "Design user-friendly interfaces and engaging user experiences.",
                },
                {
                  title: "Digital Marketing Campaigns",
                  icon: "assets/images/service-icon-10.png",
                  text: "Boost your business with targeted digital marketing strategies.",
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
