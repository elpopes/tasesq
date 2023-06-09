import React from 'react';
import { faqText } from '../translations/FAQ';
import { LanguageContext, LanguageContextProps } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);

  return (
    <div className='container'>
      <h2>{faqText[language].heading}</h2>
      {faqText[language].sections.map((section, index) => (
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
