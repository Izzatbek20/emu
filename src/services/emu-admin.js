import axios from "axios"

const Axsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

const emuAdminService = {
    serviceAll() {
        return Axsios.get('/service')
    },
    news(page) {
        return Axsios.get('/news', {
            params: {
                page: page
            }
        })
    },
    feedback(page) {
        return Axsios.get('/feedback', {
            params: {
                page: page
            }
        })
    },
    question() {
        return Axsios.get('/question')
    },
    vacancyBreanch() {
        return Axsios.get('/vacancy/breanch')
    },
    vacancy(id) {
        return Axsios.get('/vacancy', {
            params: {
                breanch_id: id
            }
        })
    },
    one(id) {
        return Axsios.get('/news/one', {
            params: {
                id: id
            }
        })
    },
    service_one(id) {
        return Axsios.get('service/one', {
            params: {
                id: id
            }
        })
    },
    bannerGet() {
        return Axsios.get('banner')
    },
    banner2Get() {
        return Axsios.get('banner2')
    },
    info() {
        return Axsios.get('info')
    },
    raxbariyat(id) {
        return Axsios.get('raxbariyat/with-breanch', {
            params: {
                breanch_id: id
            }
        })
    },
}

export default emuAdminService