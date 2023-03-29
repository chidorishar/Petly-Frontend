import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: `http://localhost:3000/Petly-Frontend/locales/{{lng}}/translation.json`,
    },
    fallbackLng: 'en',
    whitelist: ['en', 'uk'],
    debug: true,

    detection: {
      order: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  });
