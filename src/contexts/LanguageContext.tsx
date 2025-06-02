import React, { useContext, useState, useEffect } from 'react';
import { Language } from '../utils/Types';
import { TRANSLATIONS } from '../utils/data/consts/Translations.const';
import { LANGCONTEXT } from '../utils/data/consts/ContextTypes.const';


export const useLanguage = () => {
  const context = useContext(LANGCONTEXT);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'vi'].includes(savedLanguage)
      ? savedLanguage
      : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document language attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  // Translation function
  const t = (key: string, replace?: { [key: string]: string }): string => {
    let translation = TRANSLATIONS[language]?.[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }

    if (replace) {
      for (const key in replace) {
        translation = key ? translation.replace(key,replace[key]) : translation;
      }
    }

    return translation;
  };

  return (
    <LANGCONTEXT.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LANGCONTEXT.Provider>
  );
};