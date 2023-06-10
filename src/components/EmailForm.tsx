import React, { useState } from 'react';
import axios from 'axios';
import { emailFormText } from '../translations/EmailForm';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const EmailForm: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext); 
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
  
    const apiGatewayEndpoint = 'https://3xmkqnscck.execute-api.us-east-1.amazonaws.com/prod';

    console.log('Message:', message);
    console.log('API Gateway Endpoint:', apiGatewayEndpoint);
  
    try {
      const response = await axios.post(apiGatewayEndpoint, message);
      console.log('Response:', response.data);
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
      <h2>{emailFormText[language].heading}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {emailFormText[language].emailLabel}
          <input type="email" name="email" value={email} onChange={handleInputChange} />
        </label>
        <label>
          {emailFormText[language].subjectLabel}
          <input type="text" name="subject" value={subject} onChange={handleInputChange} />
        </label>
        <label>
          {emailFormText[language].bodyLabel}
          <textarea name="body" value={body} onChange={handleInputChange} />
        </label>
        <button type="submit">{emailFormText[language].submitButton}</button>
      </form>
    </div>
  );
};

export default EmailForm;
