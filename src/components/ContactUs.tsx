import React from 'react';
import Map from './Map';
import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactUs: React.FC = () => {
  return (
    <div id="contact-us">
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! Feel free to reach out to us using any of the contact methods below.
          </p>
          <h3>Contact Information</h3>
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
