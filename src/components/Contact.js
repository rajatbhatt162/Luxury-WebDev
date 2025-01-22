import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">
        Get in Touch With Us Through the <span>Provided Details</span> Below
      </h2>

      <div className="contact-content">
        <iframe
          title="Google Map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5508249342927!2d78.04915577593376!3d30.320294681804794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d8cd2c235f%3A0x2c1354c5db48f503!2s46%2F3%2C%20Park%20Rd%2C%20Laxman%20Chowk%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1687814637321!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="surname" placeholder="Surname" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="url" name="website" placeholder="Your Website URL" />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
