import telegramService from "@/services/telegram"

const state = {}

const getters = {}

const mutations = {}

const actions = {
    aloqa(context, data) {
        return new Promise((resolve, reject) => {
            telegramService.aloqa(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
    sendMedia(context, data) {
        return new Promise((resolve, reject) => {
            telegramService.sendMedia(data)
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