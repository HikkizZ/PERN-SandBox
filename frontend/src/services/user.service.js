import axios from '.root.service.js';
import { formatUserData } from 'rut.js';

export async function getUsersService() { //? Función que obtiene los usuarios.
    try {
        const { data } = await axios.get('/user/'); //* Hace una petición GET a la ruta /user/.
        const formattedData = data.data.map(formatUserData); //* Formatea los datos de los usuarios.
        return formattedData; //* Retorna los datos formateados.
    } catch (error) {
        return error.response.data;
    }
};

export async function updateUserService(data, rut){
    try {
        const response = await axios.patch(`/user/datail/?rut=${rut}`, data); //* Hace una petición PATCH a la ruta /user/datail/?rut=${rut}.
        console.log(response); //* Imprime la respuesta de la petición.
        return response.data; //* Retorna la respuesta de la petición.
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};

export async function deleteUserService(rut) { //? Función que elimina un usuario.
    try {
        const response = await axios.delete(`/user/datail/?rut=${rut}`); //* Hace una petición DELETE a la ruta /user/datail/?rut=${rut}.
        return response.data; //* Retorna la respuesta de la petición.
    } catch (error) {
        return error.response.data;
    }
};