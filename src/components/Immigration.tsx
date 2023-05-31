import React from 'react';
import { immigrationText } from '../translations/Immigration';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const Immigration: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext); 
  const t = immigrationText[language];

  return (
    <div className="container">
      <h2>{t.title}</h2>
      <p>{t.introduction}</p>
      <h3>{t.servicesTitle}</h3>
      <ul>
        {t.servicesList.map((service: string, index: number) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>{t.conclusion}</p>
      <p>{t.callToAction}</p>
    </div>
  );
};

export default Immigration;

