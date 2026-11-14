'use client';

import React, { createContext, useContext, useState } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { translateUrl } from '@/config/routes';

import tr from '@/locales/tr.json';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';

export type Language = 'tr' | 'en' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, unknown>> = {
  tr,
  en,
  de,
  fr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const supportedLocales: Language[] = ['tr', 'en', 'fr', 'de'];

export function LanguageProvider({
  children,
  defaultLocale = 'tr',
}: {
  children: React.ReactNode;
  defaultLocale?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Extract locale from pathname first (single source of truth), then params, then defaultLocale
  const pathLocale = pathname?.split('/')[1] as Language;
  const detectedLocale = supportedLocales.includes(pathLocale)
    ? pathLocale
    : supportedLocales.includes(params?.locale as Language)
    ? (params.locale as Language)
    : supportedLocales.includes(defaultLocale as Language)
    ? (defaultLocale as Language)
    : 'tr';

  const [language, setLanguageState] = useState<Language>(detectedLocale);
  const [prevLocale, setPrevLocale] = useState(detectedLocale);

  if (detectedLocale !== prevLocale) {
    setPrevLocale(detectedLocale);
    setLanguageState(detectedLocale);
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (pathname) {
      const newPath = translateUrl(pathname, lang);
      router.push(newPath);
    }
  };

  const t = (key: string): string => {
    const resolve = (obj: Record<string, unknown>, path: string): string | undefined => {
      if (!obj) return undefined;
      if (typeof obj[path] === 'string') return obj[path] as string;
      const parts = path.split('.');
      let current: unknown = obj;
      for (const part of parts) {
        if (
          current === null ||
          current === undefined ||
          typeof current !== 'object' ||
          !(part in (current as Record<string, unknown>))
        ) {
          return undefined;
        }
        current = (current as Record<string, unknown>)[part];
      }
      return typeof current === 'string' ? current : undefined;
    };

    const val = resolve(translations[language], key);
    if (val !== undefined) return val;
    const fallback = resolve(translations['tr'], key);
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
