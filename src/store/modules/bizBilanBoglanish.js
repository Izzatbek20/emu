import FormService from "@/services/form"

const state = {
    visitor_uid: null
}

const getters = {}

const mutations = {
    setVisittor(state, payload) {
        state.visitor_uid = payload
        console.log(payload);
    }
}

const actions = {
    visitor(context) {
        return new Promise((resolve, reject) => {
            FormService.visitor()
                .then(response => {
                    context.commit('setVisittor', response.data.visitor_uid)
                    resolve(response)
                }).catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                })
        })
    },
    send(context, formData) {
        return new Promise((resolve, reject) => {
            FormService.send(formData)
                .then(response => {
                    console.log('Muvaffaqiyatli javob:', response);
                    resolve(response)
                })
                .catch(error => {
                    console.log(error);
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
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