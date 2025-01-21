import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-heading">
              <h2>
                Feel free to <em>Contact</em> us via the <span>HTML form</span>
              </h2>
              <div id="map">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  title="Map"
                ></iframe>
              </div>
              <div className="info">
                <span>
                  <i className="fa fa-phone"></i>{' '}
                  <a href="#">010-020-0340<br />090-080-0760</a>
                </span>
                <span>
                  <i className="fa fa-envelope"></i>{' '}
                  <a href="#">info@company.com<br />mail@company.com</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <form id="contact" action="" method="get">
              <div className="row">
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Surname"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="Your Website URL"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button">
                      Submit Request
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-dec">
        <img src="assets/images/contact-dec.png" alt="Decoration" />
      </div>
      <div className="contact-left-dec">
        <img src="assets/images/contact-left-dec.png" alt="Decoration" />
      </div>
    </div>
  );
};

export default Contact;
