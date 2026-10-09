'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext({
  lang: 'mr',
  setLang: () => {},
  t: translations.mr,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('mr');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ssa_lang');
      if (saved && (saved === 'mr' || saved === 'hi' || saved === 'en')) {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('ssa_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore in incognito or restricted environments
    }
  };

  const t = translations[lang] || translations.mr;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
