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

const app = createApp(App)

UiComponents.map(component => app.component(component.name, component))
app.use(i18n)
app.use(VueSplide);
app.use(VueTheMask);
app.use(router)
app.use(store)

app.mount('#app')