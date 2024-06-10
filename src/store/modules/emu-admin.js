import emuAdminService from "@/services/emu-admin"

const state = {
    data: null,
    bannerData: null,
    news: null
}

const getters = {
    isLoading(state) {
        return Boolean(!state.data)
    },
    isLoadingNews(state) {
        return Boolean(!state.news)
    },
    isLoadingBanner(state) {
        return Boolean(!state.banner)
    }
}

const mutations = {
    setData(state, data) {
        state.data = data
    },
    setNews(state, news) {
        state.news = news
    },
    setBanner(state, data) {
        state.bannerData = data
    }
}

const actions = {
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
    news(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.news()
                .then(response => {
                    context.commit('setNews', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    feedback(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.feedback()
                .then(response => {
                    context.commit('setData', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response ? error.response : error)
                });
        })
    },
    vacancy(context) {
        return new Promise((resolve, reject) => {
            emuAdminService.vacancy()
                .then(response => {
                    context.commit('setData', response.data)
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