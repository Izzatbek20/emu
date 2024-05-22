import {
    createStore
} from 'vuex'
import main from './modules/main'
import courier from './modules/courier'
import amocrm from './modules/amocrm'
import sms from './modules/sms'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        courier,
        amocrm,
        sms
    }
})
export default store