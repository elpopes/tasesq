import React, { useContext } from 'react';
import { LanguageContext, Language } from '../LanguageContext';

const LanguageButton: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  if (!setLanguage) return null; 

  const toggleLanguage = () => {
    setLanguage((current: Language) => (current === 'en' ? 'es' : 'en'));
  };

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageButton;
