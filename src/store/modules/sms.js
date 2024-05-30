import courierService from "@/services/courier"
import smsService from "@/services/sms"
import {
    data
} from "autoprefixer"


const state = {}

const getters = {}

const mutations = {}

const actions = {
    smsGenerate(context, data) {
        return new Promise((resolve, reject) => {
            smsService.smsGenerate(data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
        })
    },
    smsCheck(context, data) {
        return new Promise((resolve, reject) => {
            smsService.smsCheck(data)
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