import {
    createStore
} from 'vuex'
import main from './modules/main'
import bizBilanBoglanish from './modules/bizBilanBoglanish'
import courier from './modules/courier'
import amocrm from './modules/amocrm'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        bizBilanBoglanish,
        courier,
        amocrm
    }
})
export default store