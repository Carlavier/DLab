import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import viTranslation from './locales/vi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: viTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: 'vi',
    debug: false, // Disable debug mode
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: false,
    },
  });

// Add language change listener for debugging
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
});

export default i18n;
