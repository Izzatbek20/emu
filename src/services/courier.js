import axios from "axios"

const courierService = {
    getViloyat(xml) {
        return axios.post('https://home.courierexe.ru/api', xml, {
            headers: {
                'Content-Type': 'application/xml'
            }
        })
    },
    getPunkit(xml) {
        return axios.post('https://home.courierexe.ru/api', xml, {
            headers: {
                'Content-Type': 'application/xml'
            }
        })
    },
}

export default courierService