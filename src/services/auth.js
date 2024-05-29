import {
    getItem,
    removeItem,
    setItem
} from "@/helpers/rwLocalStorage";
import axios from "axios"

const authAxsios = axios.create({
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

const guestAxsios = axios.create({
    withCredentials: true,
    exposedHeaders: ["set-cookie"],
    baseURL: import.meta.env.VITE_EMU_API_ORIGIN,
    headers: {
        "Content-Type": "application/json",
    },
});

authAxsios.interceptors.request.use(config => {
    const token = getItem('access_token')
    const authorization = token ? `Bearer ${token}` : ''
    config.headers.Authorization = authorization
    return config
})

authAxsios.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        console.log(error);
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const access_token = await refreshAccessToken();
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            return authAxsios(originalRequest);
        }
        return Promise.reject(error);
    });

async function refreshAccessToken() {
    try {
        const rft = getItem('refresh_token')
        if (rft) {
            const data = {
                "token": rft,
            }
            const response = await guestAxsios.post('/refresh_token', data)
            const {
                access_token,
                refresh_token
            } = response.data

            if (access_token && refresh_token) {
                setItem('access_token', access_token)
                setItem('refresh_token', refresh_token)

                return access_token
            }
        }

    } catch (error) {
        return Promise.reject(error);
    }
}


const authService = {
    login(data) {
        return authAxsios.post('/token', data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    },
    me() {
        return authAxsios.get('/me')
    },
    validateTelefonVaLogin(data) {
        return guestAxsios.post('/user/validate/login_va_telefon', data)
    },
    smsGenerate(data) {
        return guestAxsios.post('/generate', data)
    },
    smsCheck(data) {
        return guestAxsios.post('/check', data)
    },
    register(data) {
        return guestAxsios.post('/user/register', data)
    },
}


export default authService