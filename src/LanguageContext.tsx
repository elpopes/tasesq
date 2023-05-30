import React, { createContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'en' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
