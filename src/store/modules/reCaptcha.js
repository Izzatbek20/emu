import {
    useReCaptcha
} from "vue-recaptcha-v3";

const {
    executeRecaptcha,
    recaptchaLoaded
} = useReCaptcha();

const state = {
    recaptchaToken: null
}

const getters = {}

const mutations = {
    setRecaptchaToken(state, token) {
        state.recaptchaToken = token
    }
}

const actions = {
    recaptcha(context, data) {
        return new Promise((resolve) => {

            const recaptcha = async () => {
                // (optional) Wait until recaptcha has been loaded.
                await recaptchaLoaded();

                // Execute reCAPTCHA with action "login".
                const token = await executeRecaptcha("login");

                // reCAPTCHA tokenini Vuex store ga saqlash
                commit('setRecaptchaToken', token)
            };

            resolve(recaptcha)
        })
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}