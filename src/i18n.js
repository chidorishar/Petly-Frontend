import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const newInstance = i18next.createInstance();

newInstance
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init(
    {
      backend: { loadPath: '/public/locales/{{lng}}/translation.json' },
      fallbackLng: 'en',
      fallbackNS: 'main',
      whitelist: ['en', 'uk'],
      debug: true,
      ns: ['main', 'news'],

      detection: {
        order: ['localStorage', 'cookie'],
      },

      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
      },

      React: { wait: true },

      backendOptions: [
        {
          loadPath: '/locales/{{lng}}/translation.json',
        },
      ],
    },
    (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key');
    }
  );

// export default i18next;
