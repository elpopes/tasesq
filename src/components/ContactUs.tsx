import React from 'react';
import Map from './Map';
import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';
import { contactUsText } from '../translations/ContactUs';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const ContactUs: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);

  return (
    <div id="contact-us">
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>{contactUsText[language].heading}</h2>
          <p>
            {contactUsText[language].introduction}
          </p>
          <h3>{contactUsText[language].contactInfoHeading}</h3>
          <ul>
            <ContactInfo/>
          </ul>
          <EmailForm />
        </div>
        <div className='map-wrapper'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

