import axios from "axios"

const Axsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

const telegramService = {
    aloqa(data) {
        return Axsios.post('/telegram/send-message', data)
    },
    sendMedia(data) {
        return Axsios.post('/telegram/send-media', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}

export default telegramService