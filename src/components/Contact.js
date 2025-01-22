import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">
        Feel Free To <span>Contact Us</span> Via The <span>HTML Form</span>
      </h2>
      <div className="contact-content">
        <iframe
          title="Google Map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2675429051184!2d-43.37012128508027!3d-22.999726684976768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ee3785c8e11%3A0x2e1d220c4a7891e6!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sus!4v1687814637321!5m2!1sen!2sus"
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
      {/* <div className="contact-info">
        <p>010-020-0340</p>
        <p>090-080-0760</p>
        <p>info@company.com</p>
        <p>mail@company.com</p>
      </div> */}
    </div>
  );
};

export default Contact;
