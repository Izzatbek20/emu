import axios from "axios"

// axios.defaults.withCredentials = true;
const courierAxsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        'Content-Type': 'application/json',
    },
});

const courierService = {
    getViloyat() {
        return courierAxsios.get('/courierexe/regions')
    },
    getCitys(city, namestarts) {
        return courierAxsios.get(`/courierexe/citys?city=${city}&namestarts=${namestarts}`)
    },
    getPunkit(city) {
        return courierAxsios.get(`/courierexe/punkit?city=${city}`)
    },
    getService(city) {
        return courierAxsios.get(`/courierexe/service`)
    },
    orderStatue(ordernomer) {
        return courierAxsios.get(`/courierexe/order-statue?orderno=${ordernomer}`)
    },
    calculator(data) {
        return courierAxsios.post(`/courierexe/calculator`, data)
    },
    createOrder(data) {
        return courierAxsios.post('/courierexe/create-order', data, {
            withCredentials: true,
            exposedHeaders: ["set-cookie"]
        })
    },
}

export default courierService