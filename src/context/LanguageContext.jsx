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

  const applyLanguageMeta = (l) => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = l;
    const trans = translations[l] || translations.mr;
    if (trans.meta_title) {
      document.title = trans.meta_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && trans.meta_desc) {
      metaDesc.setAttribute('content', trans.meta_desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && trans.meta_title) {
      ogTitle.setAttribute('content', trans.meta_title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && trans.meta_desc) {
      ogDesc.setAttribute('content', trans.meta_desc);
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ssa_lang');
      if (saved && (saved === 'hi' || saved === 'en')) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved);
        applyLanguageMeta(saved);
        return;
      }
    } catch {
      // ignore
    }
    applyLanguageMeta('mr');
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    applyLanguageMeta(newLang);
    try {
      localStorage.setItem('ssa_lang', newLang);
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
