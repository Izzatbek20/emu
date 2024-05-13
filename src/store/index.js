import {
    createStore
} from 'vuex'
import main from './modules/main'
import courier from './modules/courier'
import amocrm from './modules/amocrm'
import reCaptcha from './modules/reCaptcha'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        courier,
        amocrm,
        reCaptcha
    }
})
export default store