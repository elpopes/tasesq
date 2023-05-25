import React from 'react';
import { immigrationText } from '../translations/Immigration';


const Immigration: React.FC = () => {
  const t = immigrationText.en;

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

