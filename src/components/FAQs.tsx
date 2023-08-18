import React from 'react';
import Helmet from 'react-helmet'; // Import Helmet
import { faqText } from '../translations/FAQ';
import { LanguageContext, LanguageContextProps } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);
  const t = faqText[language];

  const keywords = [
    'Immigration services', 'visa applications', 'green card applications', 'citizenship applications',
    'tax preparation services', 'employment law cases', 'discrimination claims', 'wrongful termination',
    'Taxes in Texas', 'federal tax obligations', 'income tax', 'capital gains tax'
  ].join(', ');

  return (
    <div className='container'>
      <Helmet>
        <title>{t.heading} | TASESQ Law Firm</title>
        <meta name="description" content="Find answers to frequently asked questions about immigration, accounting, employment law, and taxes in Texas at TASESQ Law Firm." />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <h2>{t.heading}</h2>
      {t.sections.map((section, index) => (
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
