import React from 'react';
import Map from './Map';
import EmailForm from './EmailForm';

const ContactUs: React.FC = () => {
  return (
    <div className='container'>
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Feel free to reach out to us using any of the contact methods below.
        </p>
        <h3>Contact Information</h3>
        <ul>
          <li>Address: 1911 Guadalupe, San Antonio, TX 78207</li>
          <li>Phone: 210-231-0112</li>
          <li>Email: tasesq@msn.com</li>
        </ul>
        <EmailForm />
      </div>
      <div className='map-wrapper'>
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
