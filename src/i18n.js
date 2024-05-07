import i18 from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from "i18next-http-backend"

i18.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie']
  },
  debug: true,
  fallbackLng: 'id',
  returnObjects: true,
})