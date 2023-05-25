import React from 'react';
import { faqText } from '../translations/FAQ';

const FAQ: React.FC = () => {
  return (
    <div className='container'>
      <h2>{faqText.en.heading}</h2>
      {faqText.en.sections.map((section, index) => (
        <React.Fragment key={index}>
          <h3>{section.title}</h3>
          {section.questions.map((q, qIndex) => (
            <div key={qIndex}>
              <h4>Q: {q.q}</h4>
              <p>A: {q.a}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQ;
