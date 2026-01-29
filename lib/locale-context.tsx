"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, detectLocale, translations, TranslationKey } from './i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 저장된 언어 설정 확인, 없으면 브라우저 언어 감지
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
      setLocale(savedLocale);
    } else {
      setLocale(detectLocale());
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations.en[key] || key;
  };

  // SSR 중에는 기본값 반환 (hydration mismatch 방지)
  if (!mounted) {
    const defaultT = (key: TranslationKey): string => {
      return translations.en[key] || key;
    };
    return (
      <LocaleContext.Provider value={{ locale: 'en', setLocale: handleSetLocale, t: defaultT }}>
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
