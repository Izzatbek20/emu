import courierService from "@/services/courier"
import {
    XMLParser
} from "fast-xml-parser"

const state = {
    viloyat: null,
    punkit: null,
}

const getters = {}

const mutations = {
    setViloyat(state, payload) {
        state.viloyat = payload
    },
    setPunkit(state, payload) {
        state.punkit = payload
    }
}

const actions = {
    getViloyat(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.getViloyat(xml)
                .then(response => {
                    const parser = new XMLParser();
                    const jsonData = parser.parse(response.data);
                    context.commit('setViloyat', jsonData.regionlist)
                    resolve(jsonData)
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    getPunkit(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.getPunkit(xml)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        context.commit('setPunkit', jsonData.pvzlist)
                        resolve(jsonData)
                    } else {
                        console.log('Punkit bo\'sh');
                    }
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
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