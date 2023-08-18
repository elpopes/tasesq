import React from 'react';
import { employmentLawText } from '../translations/EmploymentLaw';
import { LanguageContext, LanguageContextProps } from '../LanguageContext';
import Helmet from 'react-helmet';

const EmploymentLaw: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext); 
  const t = employmentLawText[language];

  return (
    <div className='container'>
      <Helmet>
        <title>{t.heading}</title>
        <meta name="description" content={t.introduction} />
        <meta name="keywords" content="employment law, discrimination, termination, workplace investigations, labor law, union disputes" />
      </Helmet>
      <h2>{t.heading}</h2>
      <p>{t.introduction}</p>
      <h3>{t.servicesHeading}</h3>
      <ul>
        {t.servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>{t.paragraph1}</p>
      <p>{t.paragraph2}</p>
      <p>{t.contact}</p>
    </div>
  );
};

export default EmploymentLaw;
