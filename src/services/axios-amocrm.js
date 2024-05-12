import {
    getItem,
    setItem
} from "@/helpers/rwLocalStorage";
import axios from "axios";

const axiosAmocrm = axios.create({
    // Base url
    baseURL: import.meta.env.VITE_AMOCRM_SUBDOMAIN,
    headers: {
        "Content-Type": "application/json",
    },
});
// Xarbir so'rov uchun access token qo'yip jo'natamiz
axiosAmocrm.interceptors.request.use(
    (config) => {
        const act = getItem('act')
        if (act) {
            config.headers.Authorization = `Bearer ${act}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error.status)
    }
)

axiosAmocrm.interceptors.response.use(
    async (res) => {
            const originConfig = res.config
            if (res.data[1] == 401 && !originConfig._retry) {
                originConfig._retry = true
                const rt = await authorizationCodeOrRefreshToken()
                return axios(originConfig)
            }
            return res
        },
        async (err) => {
            const originConfig = err.config
            if (err.response.status == 401 && !originConfig._retry) {
                originConfig._retry = true
                const rt = await authorizationCodeOrRefreshToken()

                return axios(originConfig)
            }

            return Promise.reject(err);
        }
)


async function authorizationCodeOrRefreshToken() {
    try {
        const rft = getItem('rft')
        const data = {
            "client_id": import.meta.env.VITE_AMOCRM_CLIENT_ID,
            "client_secret": import.meta.env.VITE_AMOCRM_CLIENT_SECRET,
            "grant_type": rft ? "refresh_token" : "authorization_code",
            "code": rft ? rft : import.meta.env.VITE_AMOCRM_AUTHORIZATION_CODE,
            "redirect_uri": import.meta.env.VITE_AMOCRM_REDIRECT_URL
        }
        const rs = await axiosAmocrm.post('/amocrm/oauth2/access_token', data)
        const {
            access_token,
            refresh_token
        } = rs.data[0]

        if (access_token && refresh_token) {
            setItem('act', access_token)
            setItem('rft', refresh_token)

            return getItem("act")
        }

    } catch (error) {
        return Promise.reject(error);
    }
}

export default axiosAmocrm