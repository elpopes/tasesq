import React, { createContext, ReactNode, useState } from 'react';

export type Language = 'en' | 'es';

export interface LanguageContextProps {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
