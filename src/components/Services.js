import React, { useState, useEffect } from "react";
import "../styles/Services.css";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: "/images/icons/rocket.png",
      alt: "Rocket Icon",
      title: "Web Designing Service At Affordable Prices",
      description:
        "We make websites that fit your needs, helping your business grow online with the latest technologies.",
    },
    {
      icon: "/images/icons/creative.png",
      alt: "Content Icon",
      title: "Content Creation & Strategy",
      description:
        "Our expert team designs engaging and SEO-optimized content to boost your web presence and online reach.",
    },
    {
      icon: "/images/icons/speedometer.png",
      alt: "Speed Icon",
      title: "Website Speed Optimization",
      description:
        "We focus on optimizing your website's performance to ensure a fast, smooth user experience across all devices.",
    },
    {
      icon: "/images/icons/rocket.png",
      alt: "Rocket Icon",
      title: "Responsive Web Design",
      description:
        "Our responsive web design services ensure that your website looks great and functions seamlessly on all devices.",
    },
    {
      icon: "/images/icons/creative.png",
      alt: "Content Icon",
      title: "Social Media Management",
      description:
        "We manage your social media presence, crafting engaging posts, and strategies to increase audience interaction and growth.",
    },
    {
      icon: "/images/icons/creative.png",
      alt: "Speed Icon",
      title: "SEO & Speed Optimization",
      description:
        "Our team enhances your site's SEO ranking and optimizes its speed to ensure maximum visibility and user satisfaction.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  const visibleServices = [
    services[currentSlide],
    services[(currentSlide + 1) % services.length],
    services[(currentSlide + 2) % services.length],
  ];

  return (
    <div id="services" className="services-container">
      <h2 className="services-heading">OUR SERVICES</h2>
      <p className="services-subheading">
        We <span className="highlight-blue">Provide</span> The Best Service{" "}
        <br />
        With <span className="highlight-red">Our Tools</span>
      </p>
      <div className="services-cards">
        {visibleServices.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} alt={service.alt} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
