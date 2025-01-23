import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const handleLinkClick = (url, type) => {
    // Handle link clicks based on type (phone, email, social media)
    switch (type) {
      case "phone":
        window.location.href = `tel:${url}`; // Open phone dialer with number
        break;
      case "email":
        window.location.href = `mailto:${url}`; // Open email client
        break;
      case "social":
        // Open social media link in a new tab/window
        window.open(url, "_blank");
        break;
      default:
        // Handle unexpected link types gracefully (optional)
        console.warn(`Unsupported link type: ${type}`);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <h3>Luxury WebDev</h3>
        <p>
          <a href="#" onClick={(e) => handleLinkClick("8126816455", "phone")}>
            8126816455
          </a>
          &nbsp; 
          <span>
            <a
              href="#"
              onClick={(e) => handleLinkClick("webdevluxury@gmail.com", "email")}
            >
                webdevluxury@gmail.com
            </a>
          </span>
        </p>
        <div className="footer-social-icons">
          <a
            href="#"
            onClick={(e) =>
              handleLinkClick("https://www.whatsapp.com/", "social")
            }
            className="social-icon"
          >
            Whatsapp
          </a>
          <a
            href="#"
            onClick={(e) => handleLinkClick("https://twitter.com/", "social")}
            className="social-icon"
          >
            Twitter
          </a>
          <a
            href="#"
            onClick={(e) =>
              handleLinkClick("https://www.tiktok.com/", "social")
            }
            className="social-icon"
          >
            Tiktok
          </a>
          <a
            href="#"
            onClick={(e) =>
              handleLinkClick("https://www.instagram.com/", "social")
            }
            className="social-icon"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Luxury WebDev. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
