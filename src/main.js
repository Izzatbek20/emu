import './assets/app.css'
import './assets/main.css'

import {
    createApp
} from 'vue'
import {
    createHead
} from '@vueuse/head'
import App from '@/App.vue'
import router from '@/router'
import UiComponents from "@/ui-components";
import store from './store';
import i18n from './i18n';
import VueSplide from '@splidejs/vue-splide';
import VueTheMask from 'vue-the-mask'
import vueClickOutsideElement from 'vue-click-outside-element'

import {
    VueReCaptcha
} from 'vue-recaptcha-v3'; // reCAPTCHA ni import qilib oling
import VueLazyload from 'vue-lazyload';
import whiteBackground from "@/assets/images/white.webp";



const app = createApp(App)
const head = createHead()

UiComponents.map(component => app.component(component.name, component))

app.use(i18n)

app.use(VueLazyload, {
    preLoad: 1.3,
    error: whiteBackground,
    loading: whiteBackground,
    attempt: 1
})
app.use(vueClickOutsideElement)
app.use(VueSplide);
app.use(VueTheMask);
app.use(router)
app.use(store)
app.use(head)

// reCAPTCHA ni ishlatish
app.use(VueReCaptcha, {
    siteKey: import.meta.env.VITE_reCAPTCHA_SITE_KEY
})


app.mount('#app')