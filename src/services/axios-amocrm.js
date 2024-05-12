import {
    getItem,
    setItem
} from "@/helpers/rwLocalStorage";
import axios from "axios";

// Base url
axios.defaults.baseURL =
    import.meta.env.VITE_AMOCRM_SUBDOMAIN

// Xarbir so'rov uchun access token qo'yip jo'natamiz
axios.interceptors.request.use(
    (config) => {
        const act = getItem('act')
        if (act) {
            config.headers.Authorization = `Bearer 1${act}`
        }
        config.headers["Content-Type"] = 'application/json'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    async (res) => {
            if (res.data[1] == 401) {
                try {
                    const rft = getItem('rft')
                    const data = {
                        "client_id": import.meta.env.VITE_AMOCRM_CLIENT_ID,
                        "client_secret": import.meta.env.VITE_AMOCRM_CLIENT_SECRET,
                        "grant_type": rft ? "refresh_token" : "authorization_code",
                        "code": rft ? rft : import.meta.env.VITE_AMOCRM_AUTHORIZATION_CODE,
                        "redirect_uri": import.meta.env.VITE_AMOCRM_REDIRECT_URL
                    }
                    const rs = await axios.post('/amocrm/oauth2/access_token', data)
                    const {
                        access_token,
                        refresh_token
                    } = rs.data
                    console.log(rs.data);

                    if (access_token && refresh_token) {
                        setItem('act', access_token)
                        setItem('rft', refresh_token)
                    }

                } catch (error) {
                    return Promise.reject(error);
                }
            }

            return res
        },
        async (err) => {
            return Promise.reject(err);
        }
)

export default axios