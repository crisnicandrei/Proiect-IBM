import React, { useState, useEffect, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [users, setUser] = useState([]);
    const utilizatori = [{
        username: "gigel",
        password: "123",
        usertype: "student"
    }, {
        username: "gigelx",
        password: "1234",
        usertype: "prof"
    }, {
        username: "admin1",
        password: "admin2",
        usertype: "admin"
    }, {
        username: "admin7",
        password: "123",
        usertype: "admin"
    }, {
        username: "student",
        password: "123",
        usertype: "student"
    }, {
        username: "profesor",
        password: "123",
        usertype: "prof"
    }];

    const listUser = () => {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setExams(res.data);
        });*/
        setUser(utilizatori);
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
