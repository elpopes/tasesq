import * as React from "react";
import ContactInfo from "./ContactInfo";
import { footerText } from '../translations/Footer';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const Footer: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-section about-us">
          <h2>{footerText[language].aboutUs.heading}</h2>
          <p>{footerText[language].aboutUs.text}</p>
        </div>
        <div className="footer-section footer-contact-info">
          <h2>{footerText[language].contactInfo.heading}</h2>
          <ContactInfo className="footer-contact-info-content" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>{footerText[language].copyright.replace('{year}', `${currentYear}`)}</p>
      </div>
    </footer>
  );
};

export default Footer;
