import axios from "axios"

const amocrmAxsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        'Content-Type': 'application/json',
    },
});
const amocrmService = {
    createLeads(data) {
        return amocrmAxsios.post('/amocrm/api/v4/leads', data)
    },
}

export default amocrmService