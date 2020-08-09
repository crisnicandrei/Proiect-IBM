import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const isLoggedContext = createContext()
export const LoginContext = createContext();
export const CurrentUserContext = createContext();
export const StudentContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLogged,setisLogged] = useState(false);
    const [users, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [student, setStudent] = useState([]);
    const listUser = () => {
        axios.get(`http://localhost:9191/login/users`).then(res => {
            setUser(res.data);
        })
        axios.get(`http://localhost:9191/students`).then(res => {
            setStudent(res.data);
        })
    };
    useEffect(() => {
        listUser();
    }, []);

    return (
        <isLoggedContext.Provider value={[isLogged,setisLogged]}>
        <StudentContext.Provider value={[student, setStudent]}>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                <LoginContext.Provider value={[users, setUser]}>
                    {children}
                </LoginContext.Provider>
            </CurrentUserContext.Provider>
        </StudentContext.Provider>
        </isLoggedContext.Provider>
    );
}
