import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  // dil algılama eklentisi
  .use(LanguageDetector)
  // react i18next'i başlat
  .use(initReactI18next)
  // i18next'i başlat
  .init({
    resources,
    fallbackLng: 'tr',
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React zaten XSS'e karşı güvenli
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n; 