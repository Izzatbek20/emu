import amocrmService from "@/services/amocrm"

const state = {}

const getters = {}

const mutations = {

}

const actions = {
    createLeads(context, data) {
        return new Promise((resolve, reject) => {
            amocrmService.createLeads(data)
                .then(response => {
                    // context.commit('setViloyat', jsonData.regionlist)
                    resolve(response)
                })
                .catch(error => {
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