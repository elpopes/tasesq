import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { accountingText } from '../translations/Accounting';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const Accounting: React.FC = () => {
    const { language } = useContext<LanguageContextProps>(LanguageContext);
    const t = accountingText[language];
  
    return (
      <div className='container'>
        <Helmet>
          <title>{t.heading} | TASESQ Law Firm</title>
          <meta name="description" content={`Specializing in ${t.heading}. ${t.introduction}`} />
          <meta name="keywords" content="Accounting services, bookkeeping, payroll processing, tax planning, tax preparation, financial statement preparation, budgeting, cash flow management, business entity formation, tax audits, compliance, financial analysis, strategic planning, San Antonio, New York" />
        </Helmet>
        <h2>{t.heading}</h2>
        <p>
          {t.introduction}
        </p>
        <h3>{t.servicesHeading}</h3>
        <ul>
          {t.serviceList.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <p>
          {t.para1}
        </p>
        <p>
          {t.para2}
        </p>
        <p>
          {t.contact}
        </p>
      </div>
    );
  };
  
  export default Accounting;

