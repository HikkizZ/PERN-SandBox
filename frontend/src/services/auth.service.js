import axios from '.root.service.js';
import cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { lowerCaseConverter } from '@helpers/formatData.js';

export async function login(dataUser) {
    try {
        const response = await axios.post('/auth/login', {
            email: dataUser.email,
            password: dataUser.password,
        });

        const { status, data } = response;

        if (status === 200) {
            const { name, email, rut, role } = jwtDecode(data.data.token);

            const userData = { name, email, rut, role };

            sessionStorage.setItem('user', JSON.stringify(userData));

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;

            cookies.set('jwt-auth', data.data.token, { path: '/' });

            return response.data;
        }
    } catch (error) {
        return error.response.data;
    }
};

export async function register(data) {
    try {
        const dataRegister = lowerCaseConverter(data);

        const { name, email, rut, password } = dataRegister;

        const response = await axios.post('/auth/register', {
            name,
            email,
            rut,
            password
        });
        
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export async function logout() {
    try {
        await axios.post('/auth/logout');

        sessionStorage.removeItem('user');

        cookies.remove('jwt');

        cookies.remove('jwt-auth');
    } catch (error) {
        console.error('Error trying to logout: ', error);
    }
};