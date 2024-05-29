import {
    createStore
} from 'vuex'
import main from './modules/main'
import courier from './modules/courier'
import amocrm from './modules/amocrm'
import sms from './modules/sms'
import auth from './modules/auth'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        courier,
        amocrm,
        sms,
        auth
    }
})
export default store