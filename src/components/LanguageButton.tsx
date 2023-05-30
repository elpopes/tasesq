import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  if (!toggleLanguage) return null;

  const handleClick = () => {
    console.log('Current Language:', language);
    toggleLanguage();
  }

  return (
    <button onClick={handleClick}>
      {language === 'en' ? 'en Ingles' : 'In English'}
    </button>
  );
};

export default LanguageButton;
