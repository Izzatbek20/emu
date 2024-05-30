import {
    XMLParser
} from "fast-xml-parser"
import courierService from "@/services/courier"
import axios from "axios"

const notAuth = "not_auth"
const auth = "auth"
const extra = "extra"

const state = {
    viloyat: null,
    punkit: null,
    services: null,
    orderStatus: null,
    createOrder: null,
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
    setServices(state, payload) {
        state.services = payload
    },
    setCalculator(state, payload) {
        state.calculator = payload
    },
    setCreateOrder(state, payload) {
        state.createOrder = payload
    },
    addCalculatorAttribute(state, payload) {
        state.calculator[payload.name] = payload.code
    }
}

const actions = {
    getViloyat(context) {
        return new Promise((resolve, reject) => {
            courierService.getViloyat()
                .then(response => {
                    const parser = new XMLParser();
                    const jsonData = parser.parse(response.data);
                    context.commit('setViloyat', jsonData.regionlist)
                    resolve(jsonData)
                })
                .catch(error => {
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    getCitys(context, data) {
        return new Promise((resolve, reject) => {
            courierService.getCitys(data.city, data.namestarts ? data.namestarts : '')
                .then(response => {
                    const parser = new XMLParser();
                    const jsonData = parser.parse(response.data);
                    resolve(jsonData.townlist)
                })
                .catch(error => {
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    getPunkit(context, data) {
        return new Promise((resolve, reject) => {
            courierService.getPunkit(data.city)
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
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    getService(context) {
        return new Promise((resolve, reject) => {
            courierService.getService()
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        context.commit('setServices', jsonData.services)
                        resolve(jsonData)
                    } else {
                        console.log('Services  bo\'sh');
                    }
                })
                .catch(error => {
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    orderStatue(context, orderno) {
        return new Promise((resolve, reject) => {
            courierService.orderStatue(orderno)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        context.commit('setOrderStatus', jsonData.tracking)
                        resolve(jsonData)
                    }
                })
                .catch(error => {
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    calculator(context, data) {
        return new Promise((resolve, reject) => {
            courierService.calculator(data)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        resolve(jsonData)
                    }
                })
                .catch(error => {
                    // console.error('Xatolik yuz berdi:', error.response ? error.response.data : error);
                    reject(error.response ? error.response.data : error)
                });
        })
    },
    createOrder(context, data) {
        return new Promise((resolve, reject) => {
            courierService.createOrder(data)
                .then(response => {
                    if (response.data) {
                        const parser = new XMLParser();
                        const jsonData = parser.parse(response.data);
                        context.commit('setCreateOrder', jsonData.neworder)
                        resolve(jsonData)
                    }
                })
                .catch(error => {
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