import React, { useContext } from 'react';
import { aboutUsText } from '../translations/AboutUs';
import { LanguageContext } from '../LanguageContext';

const AboutUs: React.FC = () => {
  const { language } = useContext(LanguageContext); 

  return (
    <div className='container'>
      <h2>{aboutUsText[language].heading}</h2>
      <p>
        {aboutUsText[language].introduction}
      </p>
      <h3>{aboutUsText[language].lorenzoHeading}</h3>
      <p>
        {aboutUsText[language].lorenzoBio1}
      </p>
      <p>
        {aboutUsText[language].lorenzoBio2}
      </p>
      <h3>{aboutUsText[language].historyHeading}</h3>
      <p>
        {aboutUsText[language].history1}
      </p>
      <p>
        {aboutUsText[language].history2}
      </p>
      <p>
        {aboutUsText[language].contact}
      </p>
    </div>
  );
};

export default AboutUs;
