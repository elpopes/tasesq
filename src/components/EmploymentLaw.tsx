import React from 'react';
import { employmentLawText } from '../translations/EmploymentLaw';

const EmploymentLaw: React.FC = () => {
  return (
    <div className='container'>
      <h2>{employmentLawText.en.heading}</h2>
      <p>
        {employmentLawText.en.introduction}
      </p>
      <h3>{employmentLawText.en.servicesHeading}</h3>
      <ul>
        {employmentLawText.en.servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>
        {employmentLawText.en.paragraph1}
      </p>
      <p>
        {employmentLawText.en.paragraph2}
      </p>
      <p>
        {employmentLawText.en.contact}
      </p>
    </div>
  );
};

export default EmploymentLaw;

