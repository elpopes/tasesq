import React, { useState } from 'react';
import axios from 'axios';
import { emailFormText } from '../translations/EmailForm';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

function validateEmail(email: string) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


const EmailForm: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext); 
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'subject') setSubject(value);
    if (name === 'body') setBody(value);
    if (name === 'answer') setAnswer(value);
  };

  
  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      if (!subject) {
        alert('Please enter a subject.');
        return;
      }
      if (!body) {
        alert('Please enter a message body.');
        return;
      }
      if (parseInt(answer) !== num1 + num2) {
          alert('Math answer is incorrect. Please try again.');
          return;
      }
  
    const actualSubject = `From: ${email} - Subject: ${subject}`;  
    const message = {
      to: 'lorenzo@tijerinafedlaw.com',
      from: 'lorenzo@tijerinafedlaw.com',
      subject : actualSubject,
      text: body,
      math: { num1, num2, answer },
    };
  
    const apiGatewayEndpoint = 'https://3xmkqnscck.execute-api.us-east-1.amazonaws.com/prod';

    console.log('Message:', message);
    console.log('API Gateway Endpoint:', apiGatewayEndpoint);
  
    try {
      const response = await axios.post(apiGatewayEndpoint, message);
      console.log('Response:', response.data);
      alert('Email sent successfully!');
      
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
      setAnswer('');

    } catch (error) {
        console.error('Error sending email', error);
        if (error.response) {
          alert('An error occurred: ' + error.response.data.body);
        } else {
          alert('An error occurred while sending the email.');
        }
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
        <label>
          {emailFormText[language].mathQuestion.replace('{num1}', num1.toString()).replace('{num2}', num2.toString())}
          <input type="text" name="answer" value={answer} onChange={handleInputChange} />
        </label>
        <button type="submit">{emailFormText[language].submitButton}</button>
      </form>
    </div>
  );
};

export default EmailForm;

