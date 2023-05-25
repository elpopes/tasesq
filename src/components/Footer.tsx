import * as React from "react";
import ContactInfo from "./ContactInfo";
import { footerText } from '../translations/Footer';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-section about-us">
          <h2>{footerText.en.aboutUs.heading}</h2>
          <p>{footerText.en.aboutUs.text}</p>
        </div>
        <div className="footer-section footer-contact-info">
          <h2>{footerText.en.contactInfo.heading}</h2>
          <ContactInfo className="footer-contact-info-content" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>{footerText.en.copyright.replace('{year}', `${currentYear}`)}</p>
      </div>
    </footer>
  );
};

export default Footer;

