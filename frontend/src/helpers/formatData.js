import { startCase } from 'lodash';
import { format as formatRut } from 'rut.js';
import { format as formatTempo } from '@formkit/tempo';

export function formatUserData(user){ //? Función que formatea los datos de un usuario.
    return {
        ...user,
        name: startCase(user.name), //* Convierte la primera letra de cada palabra en mayúscula.
        role: startCase(user.role), //* Convierte la primera letra de cada palabra en mayúscula.
        rut: formatRut(user.rut), //* Formatea el rut del usuario. El formato que ofrece rut.js es xx.xxx.xxx-x.
        createdAt: formatTempo(user.createdAt, "DD-MM-YYYY") //* Formatea la fecha de creación del usuario.
    };
};

export function lowerCaseConverter(obj) { //? Función que convierte a minúsculas los valores de un objeto.
    for (let key in obj) { //* Recorre las propiedades del objeto.
        if (typeof obj[key] === 'string') { //* Si el valor es un string entonces lo convierte a minúsculas.
            obj[key] = obj[key].toLowerCase();
        }
    }
    return obj;
};

export function formatPostUpdate(user) {
    return {
        name: startCase(user.name),
        role: startCase(user.role),
        rut: formatRut(user.rut),
        email: user.email,
        createdAt: formatTempo(user.createdAt, "DD-MM-YYYY")
    };
};