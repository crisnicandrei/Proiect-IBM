import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [users, setUser] = useState([]);


    const listUser = () => {
        axios.get(`http://localhost:9191/login/users`).then(res => {
            setUser(res.data);
        })
    };
    useEffect(() => {
        listUser();
    }, []);

    return (
        <LoginContext.Provider value={[users, setUser]}>
            {children}
        </LoginContext.Provider>
    );
}
