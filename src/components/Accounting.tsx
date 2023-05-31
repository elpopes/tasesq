import React, { useContext } from 'react';
import { accountingText } from '../translations/Accounting';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; // Import LanguageContextProps here

const Accounting: React.FC = () => {
  const { language } = useContext<LanguageContextProps>(LanguageContext); // Use the context here

  return (
    <div className='container'>
      <h2>{accountingText[language].heading}</h2>
      <p>
        {accountingText[language].introduction}
      </p>
      <h3>{accountingText[language].servicesHeading}</h3>
      <ul>
        {accountingText[language].serviceList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>
        {accountingText[language].para1}
      </p>
      <p>
        {accountingText[language].para2}
      </p>
      <p>
        {accountingText[language].contact}
      </p>
    </div>
  );
};

export default Accounting;

