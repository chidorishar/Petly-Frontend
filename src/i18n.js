import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { FRONTEND_BASE_URL } from 'utils/appKeys';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: `${FRONTEND_BASE_URL}/Petly-Frontend/locales/{{lng}}/translation.json`,
    },
    fallbackLng: 'en',
    whitelist: ['en', 'uk'],
    debug: false,

    detection: {
      order: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  });
