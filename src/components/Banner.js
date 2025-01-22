import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  const phoneNumber = "8126816455";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="home" className="banner">
      <div className="banner__content">
        <p className="banner__subtitle">Welcome to Luxury WebDev</p>
        <h1 className="banner__title">
          Let’s Work Together <span>Take your business to the next level </span>
          with a website that stands out
        </h1>
        <p className="banner__note">
          At Luxury WebDev, we design websites that make a strong impression.
          Whether you need a simple and professional static website, an advanced
          dynamic platform, or a website that works perfectly on any device,
          we’re here to help.
        </p>
        <div className="banner__actions">
          <button onClick={handleCall} className="banner__btn">
            Call Us Now
          </button>
        </div>
      </div>
      <div className="banner__image">
        <img src="\images\Banner.png" alt="Office" />
      </div>
    </section>
  );
};

export default Banner;
