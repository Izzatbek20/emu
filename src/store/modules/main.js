import {
    gettersTypes
} from "./types"

const state = {
    menuMini: false
}

const getters = {
    [gettersTypes.menuMini]: state => {
        return state.user
    },
}

const mutations = {
    miniMenuToggle(state, att) {
        state.menuMini = att
    },
}

const actions = {}

export default {
    state,
    mutations,
    actions,
    getters
}