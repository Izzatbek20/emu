import {
    createStore
} from 'vuex'
import main from './modules/main'
import bizBilanBoglanish from './modules/bizBilanBoglanish'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
        bizBilanBoglanish
    }
})
export default store