import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const LoginContext = createContext();
export const CurrentUserContext = createContext();

export const LoginProvider = ({ children }) => {
    const [users, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState('');

    const listUser = () => {
        axios.get(`http://localhost:9191/login/users`).then(res => {
            setUser(res.data);
        })
    };
    useEffect(() => {
        listUser();
    }, []);

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <LoginContext.Provider value={[users, setUser]}>
                {children}
            </LoginContext.Provider>
        </CurrentUserContext.Provider>
    );
}
