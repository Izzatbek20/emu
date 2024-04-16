import './assets/app.css'
import './assets/main.css'

import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import UiComponents from "@/ui-components";

const app = createApp(App)

UiComponents.map(component => app.component(component.name, component))

app.use(router)

app.mount('#app')