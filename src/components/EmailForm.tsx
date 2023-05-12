// import React, { useState } from 'react';
// import { send } from '@sendgrid/mail';

// const EmailForm: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     if (name === 'email') setEmail(value);
//     if (name === 'subject') setSubject(value);
//     if (name === 'body') setBody(value);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

//     const message = {
//       to: 'tasesq@msn.com',
//       from: email,
//       subject,
//       text: body,
//     };

//     try {
//       await send(message);
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email', error);
//       alert('An error occurred while sending the email.');
//     }

//     // Reset form fields
//     setEmail('');
//     setSubject('');
//     setBody('');
//   };

//   return (
//     <div>
//       <h2>Email Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" name="email" value={email} onChange={handleInputChange} />
//         </label>
//         <label>
//           Subject:
//           <input type="text" name="subject" value={subject} onChange={handleInputChange} />
//         </label>
//         <label>
//           Body:
//           <textarea name="body" value={body} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default EmailForm;
