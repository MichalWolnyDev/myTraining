import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import pl from '../locales/pl.json'

const resources = {
  en: { translation: en },
  pl: { translation: pl }
}

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources
})

export default i18n
