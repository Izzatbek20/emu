import {
    createI18n
} from 'vue-i18n'

import en from '@/locales/en.json'
import uz from '@/locales/uz.json'

const localeDefault = 'uz'

const messages = {
    en: en,
    uz: uz
}

const i18n = createI18n({
    locale: localeDefault,
    fallbackLocale: 'en',
    messages
})

document.querySelector('html').setAttribute('lang', localeDefault)

export default i18n