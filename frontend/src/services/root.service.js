import axios from 'axios';
import cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001/api';

const instance = axios.create({ //? Creamos una instancia de axios.
    baseURL: API_URL, //* Es la URL base de la API.
    headers: { //* Son los headers de la petición.
        'Content-Type': 'application/json', 
    },
    withCredentials: true, //* Con esto permitimos las cookies.
});

instance.interceptors.request.use((config) => { //? Creamos un interceptor (Middleware) de petición.
    const token = cookies.get('jwt-auth', { path: '/'});
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (error) => Promise.reject(error)
);

export default instance;