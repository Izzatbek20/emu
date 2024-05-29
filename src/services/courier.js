import axios from "axios"

// axios.defaults.withCredentials = true;

const courierService = {
    apiPost(actions, xml) {
        return axios.post(`${import.meta.env.VITE_EMU_API_ORIGIN}/courierexe/api?actions=${actions}`, xml, {
            headers: {
                'Content-Type': 'application/xml'
            }
        })
    },
}

export default courierService