import axios from "axios"

const FormService = {
    visitor() {
        return axios.get('https://gso.amocrm.ru/humans/visitor')
    },
    send(formData) {
        return axios.post('https://forms.amocrm.ru/queue/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}

export default FormService