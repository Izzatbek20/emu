import './assets/app.css'
import './assets/main.css'

import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import UiComponents from "@/ui-components";
import store from './store';
import i18n from './i18n';
import VueSplide from '@splidejs/vue-splide';
import VueTheMask from 'vue-the-mask'
import {
    VueFire
} from 'vuefire'
import {
    firebaseApp
} from './initFirebase'
import {
    VueReCaptcha,
    useReCaptcha
} from 'vue-recaptcha-v3'; // reCAPTCHA ni import qilib oling



const app = createApp(App)

UiComponents.map(component => app.component(component.name, component))

app.use(i18n)

app.use(VueSplide);
app.use(VueTheMask);
app.use(router)
app.use(store)

app.use(VueFire, {
    firebaseApp,
    modules: [],
})
// reCAPTCHA ni ishlatish
app.use(VueReCaptcha, {
    siteKey: import.meta.env.VITE_reCAPTCHA_SITE_KEY
})


app.mount('#app')