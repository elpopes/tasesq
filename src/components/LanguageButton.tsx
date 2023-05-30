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
    <button className="lang-button" onClick={handleClick}>
    {language === 'en' ? 'En Espanol' : 'In English'}
  </button>
  );
};

export default LanguageButton;
