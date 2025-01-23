import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const videos = [
    "/videos/portfolio1.MP4",
    "/videos/portfolio2.MP4",
    "/videos/portfolio3.MP4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 9000); // Change video every 3 seconds
    return () => clearInterval(interval);
  }, [videos.length]);

  // Determine the visible videos (3 at a time)
  const getVisibleVideos = () => {
    let visibleVideos = [];
    for (let i = 0; i < 3; i++) {
      visibleVideos.push(videos[(currentIndex + i) % videos.length]);
    }
    return visibleVideos;
  };

  return (
    <div id="portfolio" className="portfolio">
      <h2>
        Our Recent <span>Projects</span> & Case Studies <span>For Clients</span>
      </h2>
      <p className="portfolio-subtitle">OUR PORTFOLIO</p>
      <div className="slider">
        {getVisibleVideos().map((video, index) => (
          <div key={index} className="slide">
            <video src={video} autoPlay muted loop /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;