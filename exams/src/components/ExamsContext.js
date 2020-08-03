import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ExamsContext = createContext();
export const wExamsContext = createContext();


const EXAMS_URL='http://localhost:9191/exams'
export const ExamsProvider = (props) => {

    const [exams, setExams] = useState([]);
    const [wExams, setWExams] = useState([]);
    // const examene = [
    //     // {
    //     //     id: 1,
    //     //     materie: 'asdf',
    //     //     data: 'maine',
    //     //     profesor: 'greconici',
    //     //     status: 'acceptat'
    //     // },
    //     // {
    //     //     id: 2,
    //     //     materie: 'ts',
    //     //     data: 'ieri',
    //     //     profesor: 'dragomir',
    //     //     status: 'acceptat'
    //     // },
    //     // {
    //     //     id: 3,
    //     //     materie: 'ts',
    //     //     data: 'azi',
    //     //     profesor: 'dragomir',
    //     //     status: 'acceptat'
    //     // }
    // ]
    // const exameneWait = [
    //     {
    //         id: 1,
    //         materie: 'ceva',
    //         data: 'a fost',
    //         profesor: 'greco',
    //         status: 'asteptare'
    //     }
    // ]
    const listExams = () => {
        axios.get(EXAMS_URL).then(res => {
            setExams(res.data);
            console.log(res.data);
        });
        
    };
    // const listExamsWait = () => {
    //     setWExams(exameneWait);
    // }
    useEffect(() => {
        listExams(); 
        
       
    }, []);
    return (
        <wExamsContext.Provider value={[wExams, setWExams]}>
            <ExamsContext.Provider value={[exams, setExams]}>
                {props.children}
            </ExamsContext.Provider>
        </wExamsContext.Provider>
    );
}
