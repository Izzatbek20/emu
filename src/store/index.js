import {
    createStore
} from 'vuex'
import main from './modules/main'
import bizBilanBoglanish from './modules/bizBilanBoglanish'
import courier from './modules/courier'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        bizBilanBoglanish,
        courier
    }
})
export default store