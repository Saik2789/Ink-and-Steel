import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivos de traducción
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: 'en', // Idioma por defecto si la detección falla
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;
