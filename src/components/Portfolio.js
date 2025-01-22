import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const images = [
    "/images/portfolio-01.jpg",
    "/images/portfolio-02.jpg",
    "/images/portfolio-03.jpg",
    "/images/portfolio-04.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Determine the visible images (3 at a time)
  const getVisibleImages = () => {
    let visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  return (
    <div className="portfolio">
      <h2>
        Our Recent <span>Projects</span> & Case Studies <span>For Clients</span>
      </h2>
      <p className="portfolio-subtitle">OUR PORTFOLIO</p>
      <div className="slider">
        {getVisibleImages().map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
