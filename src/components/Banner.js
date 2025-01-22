
import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  // const phoneNumber = "8126816455";

  return (
    <section id="home" className="banner">
      <div className="banner__content">
        <p className="banner__subtitle">Website Designing</p>
        <h1 className="banner__title">
          Get the <span>Custom Website</span> for your Business
        </h1>
        <p className="banner__note">
          You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us for more info. Thank you.
        </p>
        <div className="banner__actions">
          <button className="banner__btn">Our Services</button>
          {/* <a href={`tel:${phoneNumber}`} className="banner__phone">
            {phoneNumber}
          </a> */}
        </div>
      </div>
      <div className="banner__image">
        <img src="\images\Banner.png" alt="Office" />
      </div>
    </section>
  );
};

export default Banner;
