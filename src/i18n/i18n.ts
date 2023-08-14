import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/i18n/en';
import sk from '@/i18n/sk';

i18next.use(LanguageDetector).init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    sk: {
      translation: sk,
    },
  },
});

export default i18next;
