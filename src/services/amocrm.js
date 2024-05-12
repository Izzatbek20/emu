import axios from "@/services/axios-amocrm.js"

const amocrmService = {
    getAccessToken(data) {
        return axios.post('/amocrm/oauth2/access_token', data)
    },
    createLeads(data) {
        return axios.post('/amocrm/api/v4/leads', data)
    },
}

export default amocrmService