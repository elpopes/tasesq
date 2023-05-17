import * as React from "react";
import ContactInfo from "./ContactInfo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>We are a forward-thinking law firm that cultivates enduring relationships with our clients, rooted in mutual respect, trust, and the highest level of professional integrity. Our mission is to transform the conventional role of a law firm, with an unwavering commitment to achieving extraordinary outcomes for our clients.</p>
        </div>
        <div className="footer-section footer-contact-info">
  <h2>Contact Info</h2>
  <ContactInfo className="footer-contact-info-content" />
</div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} TASESQ, San Antonio, TX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
