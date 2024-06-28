import emuAdminService from "@/services/emu-admin"

const state = {
    data: null,
    bannerData: null,
    banner2Data: null,
    afzalliklar: null,
    ourClient: null,
    vakansiya: null,
    vakansiyaBreanch: null,
    info: null,
    serviceAll: null,
    news: null
}

const getters = {
    isLoading(state) {
        return Boolean(!state.data)
    },
    isLoadingInfo(state) {
        return Boolean(!state.info)
    },
    isLoadingAfzalliklar(state) {
        return Boolean(!state.afzalliklar)
    },
    isLoadingOurClient(state) {
        return Boolean(!state.ourClient)
    },
    isLoadingNews(state) {
        return Boolean(!state.news)
    },
    isLoadingBanner(state) {
        return Boolean(!state.banner)
    },
    isLoadingVakansiya(state) {
        return Boolean(!state.vakansiya)
    }
}

const mutations = {
    setData(state, data) {
        state.data = data
    },
    afzalliklar(state, data) {
        state.afzalliklar = data
    },
    ourClient(state, data) {
        state.ourClient = data
    },
    setNews(state, news) {
        state.news = news
    },
    setBanner(state, data) {
        state.bannerData = data
    },
    setBanner2(state, data) {
        state.banner2Data = data
    },
    vakansiya(state, data) {
        state.vakansiya = data
    },
    serviceAll(state, data) {
        state.serviceAll = data
    },
    vakansiyaBreanch(state, data) {
        state.vakansiyaBreanch = data
    },
    setInfo(state, data) {
        state.info = data
    }
}

const actions = {
    afzalliklar(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.afzalliklar()
                .then(response => {
                    context.commit('afzalliklar', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    ourClient(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.ourClient()
                .then(response => {
                    context.commit('ourClient', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    serviceAll(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.serviceAll()
                .then(response => {
                    context.commit('serviceAll', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    getBanner(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.bannerGet()
                .then(response => {
                    context.commit('setBanner', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    getBanner2(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.banner2Get()
                .then(response => {
                    context.commit('setBanner2', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    info(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.info()
                .then(response => {
                    context.commit('setInfo', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    news(context, page = 1) {
        return new Promise((resolve, reject) => {
            emuAdminService.news(page)
                .then(response => {
                    context.commit('setNews', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    feedback(context, page = 1) {
        return new Promise((resolve, reject) => {
            emuAdminService.feedback(page)
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    vacancyBreanch(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.vacancyBreanch()
                .then(response => {
                    context.commit('vakansiyaBreanch', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    vacancy(context, id) {
        return new Promise((resolve, reject) => {
            emuAdminService.vacancy(id)
                .then(response => {
                    context.commit('vakansiya', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    question(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.question()
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    service(context, id) {
        return new Promise((resolve, reject) => {
            emuAdminService.service_one(id)
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    one(context, id) {
        return new Promise((resolve, reject) => {
            emuAdminService.one(id)
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    raxbariyat(context, id = null) {
        return new Promise((resolve, reject) => {
            emuAdminService.raxbariyat(id)
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
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