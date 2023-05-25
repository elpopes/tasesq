import React from 'react';
import { accountingText } from '../translations/Accounting';

const Accounting: React.FC = () => {
  return (
    <div className='container'>
      <h2>{accountingText.en.heading}</h2>
      <p>
        {accountingText.en.introduction}
      </p>
      <h3>{accountingText.en.servicesHeading}</h3>
      <ul>
        {accountingText.en.serviceList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>
        {accountingText.en.para1}
      </p>
      <p>
        {accountingText.en.para2}
      </p>
      <p>
        {accountingText.en.contact}
      </p>
    </div>
  );
};

export default Accounting;

