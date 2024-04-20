import {
    createStore
} from 'vuex'
import main from './modules/main'

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        main,
    }
})
export default store