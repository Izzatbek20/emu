import {
    XMLParser
} from "fast-xml-parser"
import courierService from "@/services/courier"

const notAuth = "not_auth"
const auth = "auth"
const extra = "extra"

const state = {
    viloyat: null,
    punkit: null,
    orderStatus: null,
    calculator: {
        to: {
            viloyat: null,
            city: null,
            kuryerChaqirish: null,
            punkit: null,
        },
        from: {
            viloyat: null,
            city: null,
            kuryerChaqirish: null,
        },
        korobka: {
            w: null,
            h: null,
            l: null
        },
        weight: null,
        price: null,
        service: null,
    }
}

const getters = {}

const mutations = {
    setViloyat(state, payload) {
        state.viloyat = payload
    },
    setPunkit(state, payload) {
        state.punkit = payload
    },
    setOrderStatus(state, payload) {
        state.orderStatus = payload
    },
    setCalculator(state, payload) {
        state.calculator = payload
    }
}

const actions = {
    getViloyat(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.apiPost(notAuth, xml)
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
    getCitys(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.apiPost(notAuth, xml)
                .then(response => {
                    const parser = new XMLParser();
                    const jsonData = parser.parse(response.data);
                    resolve(jsonData.townlist)
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    getPunkit(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.apiPost(notAuth, xml)
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
    orderStatue(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.apiPost(notAuth, xml)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        context.commit('setOrderStatus', jsonData.tracking)
                        resolve(jsonData)
                    }
                })
                .catch(error => {
                    console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    calculator(context, xml) {
        return new Promise((resolve, reject) => {
            courierService.apiPost(auth, xml)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        resolve(jsonData)
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