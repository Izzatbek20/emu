import './assets/app.css'
import './assets/main.css'

import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import UiComponents from "@/ui-components";
import store from './store';
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)

UiComponents.map(component => app.component(component.name, component))
app.use(VueSplide);
app.use(router)
app.use(store)

app.mount('#app')