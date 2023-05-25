import React from 'react';
import { aboutUsText } from '../translations/AboutUs';

const AboutUs: React.FC = () => {
  return (
    <div className='container'>
      <h2>{aboutUsText.en.heading}</h2>
      <p>
        {aboutUsText.en.introduction}
      </p>
      <h3>{aboutUsText.en.lorenzoHeading}</h3>
      <p>
        {aboutUsText.en.lorenzoBio1}
      </p>
      <p>
        {aboutUsText.en.lorenzoBio2}
      </p>
      <h3>{aboutUsText.en.historyHeading}</h3>
      <p>
        {aboutUsText.en.history1}
      </p>
      <p>
        {aboutUsText.en.history2}
      </p>
      <p>
        {aboutUsText.en.contact}
      </p>
    </div>
  );
};

export default AboutUs;