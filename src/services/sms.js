import axios from "axios"

const smsService = {
    getOptCode(data) {
        return axios.post(`${import.meta.env.VITE_EMU_API_ORIGIN}/sms/`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    checkOptCode(data) {
        return axios.post(`${import.meta.env.VITE_EMU_API_ORIGIN}/sms/check`, data, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
}

export default smsService