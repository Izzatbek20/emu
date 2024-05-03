import {
    createI18n
} from 'vue-i18n'

import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'
import {
    getItem
} from './helpers/rwLocalStorage'

const localeDefault = getItem('lang') ? getItem('lang') : 'uz'

const messages = {
    uz: uz,
    ru: ru,
    en: en
}

const i18n = createI18n({
    locale: localeDefault,
    fallbackLocale: 'ru',
    messages
})

document.querySelector('html').setAttribute('lang', localeDefault)

export default i18n