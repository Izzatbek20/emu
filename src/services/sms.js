import axios from "axios"

const Axsios = axios.create({
    withCredentials: true,
    exposedHeaders: ["set-cookie"],
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

const smsService = {
    smsGenerate(data) {
        return Axsios.post('/generate', data)
    },
    smsCheck(data) {
        return Axsios.post('/check', data)
    },
}

export default smsService