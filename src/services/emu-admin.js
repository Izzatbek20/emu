import axios from "axios"

const Axsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

const emuAdminService = {
    news() {
        return Axsios.get('/news')
    },
    feedback() {
        return Axsios.get('/feedback')
    },
    question() {
        return Axsios.get('/question')
    },
    vacancy() {
        return Axsios.get('/vacancy')
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
    raxbariyat(id) {
        return Axsios.get('raxbariyat/with-breanch', {
            params: {
                breanch_id: id
            }
        })
    },
}

export default emuAdminService