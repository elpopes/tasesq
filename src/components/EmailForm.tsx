import React, { useState } from 'react';
import axios from 'axios';
import { emailFormText } from '../translations/EmailForm';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'subject') setSubject(value);
    if (name === 'body') setBody(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const message = {
      to: 'tasesq@msn.com',
      from: email,
      subject,
      text: body,
    };
  
    try {
      await axios.post('/send-email', message);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email', error);
      alert('An error occurred while sending the email.');
    }
  
    setEmail('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="email-form">
      <h2>{emailFormText.en.heading}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {emailFormText.en.emailLabel}
          <input type="email" name="email" value={email} onChange={handleInputChange} />
        </label>
        <label>
          {emailFormText.en.subjectLabel}
          <input type="text" name="subject" value={subject} onChange={handleInputChange} />
        </label>
        <label>
          {emailFormText.en.bodyLabel}
          <textarea name="body" value={body} onChange={handleInputChange} />
        </label>
        <button type="submit">{emailFormText.en.submitButton}</button>
      </form>
    </div>
  );
};

export default EmailForm;
