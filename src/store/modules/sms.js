import courierService from "@/services/courier"
import smsService from "@/services/sms"
import {
    data
} from "autoprefixer"


const state = {}

const getters = {}

const mutations = {}

const actions = {
    getOptCode(context, data) {
        return new Promise((resolve, reject) => {
            smsService.getOptCode(data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    checkOptCode(context, data) {
        return new Promise((resolve, reject) => {
            smsService.checkOptCode(data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response : error)
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