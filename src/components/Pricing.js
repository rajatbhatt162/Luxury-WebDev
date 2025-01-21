import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-tables">
      <div className="tables-left-dec">
        <img src="assets/images/tables-left-dec.png" alt="" />
      </div>
      <div className="tables-right-dec">
        <img src="assets/images/tables-right-dec.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Select a suitable <em>plan</em> for your next <span>projects</span>
              </h2>
              <span>Our Plans</span>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Map through plan data */}
          {[
            {
              name: "Starter Plan",
              price: "$160/mo",
              discount: "$140",
              features: ["10 Projects", "100 GB space", "20 SEO checkups", "Basic Support"],
            },
            // Add other plans here
          ].map((plan, index) => (
            <div className="col-lg-4" key={index}>
              <div className={`item ${index === 0 ? "first-item" : ""}`}>
                <h4>{plan.name}</h4>
                <em>{plan.price}</em>
                <span>{plan.discount}</span>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="main-blue-button-hover">
                  <a href="#">Get Started</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
