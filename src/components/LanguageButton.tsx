import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  if (!toggleLanguage) return null;

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'In English' : 'en Ingles'}
    </button>
  );
};

export default LanguageButton;
