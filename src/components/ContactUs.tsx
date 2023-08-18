import React from 'react';
import { Helmet } from 'react-helmet';
import Map from './Map';
import NyMap from './NyMap';
import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';
import { contactUsText } from '../translations/ContactUs';
import { LanguageContext, LanguageContextProps } from '../LanguageContext';

const ContactUs: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);

  return (
    <div id="contact-us">
      <Helmet>
        <title>{contactUsText[language].heading}</title>
        <meta name="description" content={contactUsText[language].introduction} />
        <meta name="keywords" content="contact, address, email, location" />
      </Helmet>
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
          <NyMap />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
