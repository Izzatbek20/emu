import authService from "@/services/auth"
import {
    gettersTypes
} from "./types"
import {
    getItem,
    removeItem,
    setItem
} from "@/helpers/rwLocalStorage"

const state = {
    user: null,
    isLoginIn: null,
    // Fodalanuvchi ro'yxatdan o'tishda ma'lumotlarini salab olaish uchun
    registerForm: {
        ism: null,
        familya: null,
        telefon: null,
    },
}

const getters = {
    [gettersTypes.currentUser]: state => {
        return state.user
    },
    [gettersTypes.isLoginIn]: state => {
        return Boolean(state.isLoginIn)
    }
}

const mutations = {
    registerForm(state, payload) {
        Object.assign(state.registerForm, payload)
    },
    setUser(state, user) {
        state.user = user;
        state.isLoginIn = true
    },
    clearUser(state) {
        state.user = null;
        state.isLoginIn = false
    },
    login(state, payload) {
        setItem('access_token', payload.access_token)
        setItem('refresh_token', payload.refresh_token)
        state.user = payload.user;
        state.isLoginIn = true
    },
    logout(state, payload) {
        removeItem('access_token')
        removeItem('refresh_token')
        state.user = null;
        state.isLoginIn = false
    }

}

const actions = {
    login(context, data) {
        return new Promise((resolve, reject) => {
            authService.login(data)
                .then(response => {
                    context.commit('login', response.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        })
    },
    me(context) {
        if (getItem('access_token')) {
            return new Promise((resolve, reject) => {
                authService.me()
                    .then(response => {
                         context.commit('setUser', response.data)
                        resolve(response.data)
                    }).catch(error => {
                        reject(error)
                    });
            })
        }
    },
    register(context, data) {
        return new Promise((resolve, reject) => {
            authService.register(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
    smsGenerate(context, data) {
        return new Promise((resolve, reject) => {
            authService.smsGenerate(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
    smsCheck(context, data) {
        return new Promise((resolve, reject) => {
            authService.smsCheck(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
    validateTelefonVaLogin(context, data) {
        return new Promise((resolve, reject) => {
            authService.validateTelefonVaLogin(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}