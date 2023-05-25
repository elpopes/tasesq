import React from 'react';
import Map from './Map';
import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';
import { contactUsText } from '../translations/ContactUs';

const ContactUs: React.FC = () => {
  return (
    <div id="contact-us">
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>{contactUsText.en.heading}</h2>
          <p>
            {contactUsText.en.introduction}
          </p>
          <h3>{contactUsText.en.contactInfoHeading}</h3>
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

