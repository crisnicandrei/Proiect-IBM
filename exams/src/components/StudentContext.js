import React, { useState, useEffect, createContext } from 'react';
//import axios from 'axios';

export const StudentContext = createContext();

export const StudentProvider = (props) => {

    const [exams, setExams] = useState([]);
    const examene = [
        {
            id: 1,
            materie: 'asdf',
            data: 'maine',
            profesor: 'greconici'
        },
        {
            id: 2,
            materie: 'ts',
            data: 'ieri',
            profesor: 'dragomir'
        },
        {
            id: 3,
            materie: 'ts',
            data: 'azi',
            profesor: 'dragomir'
        }
    ]
    const listExams = () => {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setExams(res.data);
        });*/
        setExams(examene);
    };
    useEffect(() => {
        listExams();
    }, []);
    return (
        <StudentContext.Provider value={[exams, setExams]}>
            {props.children}
        </StudentContext.Provider>
    );
}
