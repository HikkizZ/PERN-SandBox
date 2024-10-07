/*
En el frontend, AuthContext.jsx es un archivo que contiene el contexto de autenticación.
El contexto es una forma de compartir información entre componentes de React sin tener que pasar props a través de cada
nivel de la aplicación.
*/
import { createContext, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; //? It imports the useNavigate hook from the react-router-dom library.

const AuthContext = createContext(); //? It creates a new context.

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext); //? It exports the useAuth hook.

export function AuthProvider({ children }) { //? It creates the AuthProvider component.
    const navigate = useNavigate(); //? It uses the useNavigate hook.
    const user = JSON.parse(sessionStorage.getItem('user')) || ''; //? It gets the user from the session storage.
    const isAuthenticated = user ? true : false; //? It checks if the user is authenticated.

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth'); //? It navigates to the login page.
        }
    }, [isAuthenticated, navigate]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}
