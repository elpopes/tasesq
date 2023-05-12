import React from 'react';
import Map from './Map';
import EmailForm from './EmailForm';

const ContactUs: React.FC = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Feel free to reach out to us using any of the contact methods below.
      </p>
      <h3>Contact Information</h3>
      <ul>
        <li>Address: 1920 Guadalupe, San Antonio, TX 78207</li>
        <li>Phone: 210-231-0112</li>
        <li>Email: tasesq@msn.com</li>
      </ul>
      {<Map />}
      {<EmailForm />}
    </div>
  );
};

export default ContactUs;
