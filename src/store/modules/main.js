import {
    gettersTypes
} from "./types"

const state = {
    menuMini: false,
    menuMobile: false,
}

const getters = {
    [gettersTypes.menuMini]: state => {
        return state.menuMini
    },
    [gettersTypes.menuMobile]: state => {
        return state.menuMobile
    },
}

const mutations = {
    miniMenuToggle(state, att) {
        state.menuMini = att
    },
    menuMobileToggle(state, att) {
        state.menuMobile = att
    },
}

const actions = {}

export default {
    state,
    mutations,
    actions,
    getters
}