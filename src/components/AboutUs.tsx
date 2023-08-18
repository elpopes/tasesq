import React, { useContext } from 'react';
import Helmet from 'react-helmet'; // Import Helmet
import { aboutUsText } from '../translations/AboutUs';
import { LanguageContext } from '../LanguageContext';

const AboutUs: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = aboutUsText[language];

  return (
    <div className='container'>
      <Helmet>
        <title>{t.heading} | TASESQ Law Firm</title>
        <meta name="description" content="Learn about TASESQ Law Firm, Lorenzo Tijerina Esq, and our rich history on San Antonio's historic West Side." />
        <meta name="keywords" content="Tijerina Law Firm, Lorenzo Tijerina, San Antonio Law, Federal Law, Legal Services, Law Firm History" />
      </Helmet>
      <h2>{t.heading}</h2>
      <p>{t.introduction}</p>
      <div className="lorenzo-section">
        <h3>{t.lorenzoHeading}</h3>
        <p>{t.lorenzoBio1}</p>
        <p>{t.lorenzoBio2}</p>
      </div>
      <div className="history-section">
        <h3>{t.historyHeading}</h3>
        <p>{t.history1}</p>
        <p>{t.history2}</p>
      </div>
      <div className="contact-section">
        <p>{t.contact}</p>
      </div>
    </div>
  );
};

export default AboutUs;
