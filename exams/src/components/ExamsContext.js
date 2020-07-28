import React, { useState, useEffect, createContext } from 'react';

export const ExamsContext = createContext();
export const wExamsContext = createContext();

export const ExamsProvider = (props) => {

    const [exams, setExams] = useState([]);
    const [wExams, setWExams] = useState([]);
    const examene = [
        {
            id: 1,
            materie: 'asdf',
            data: 'maine',
            profesor: 'greconici',
            status: 'acceptat'
        },
        {
            id: 2,
            materie: 'ts',
            data: 'ieri',
            profesor: 'dragomir',
            status: 'acceptat'
        },
        {
            id: 3,
            materie: 'ts',
            data: 'azi',
            profesor: 'dragomir',
            status: 'acceptat'
        }
    ]
    const exameneWait = [
        {
            id: 1,
            materie: 'ceva',
            data: 'a fost',
            profesor: 'greco',
            status: 'asteptare'
        }
    ]
    const listExams = () => {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setExams(res.data);
        });*/
        setExams(examene);
    };
    const listExamsWait = () => {
        setWExams(exameneWait);
    }
    useEffect(() => {
        listExams();
        listExamsWait();
    }, []);
    return (
        <wExamsContext.Provider value={[wExams, setWExams]}>
            <ExamsContext.Provider value={[exams, setExams]}>
                {props.children}
            </ExamsContext.Provider>
        </wExamsContext.Provider>
    );
}
