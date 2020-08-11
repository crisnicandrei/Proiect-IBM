import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ExamsContext } from '../ExamsContext';

export default function Searchbar() {

    const [, setExams] = useContext(ExamsContext);
    const [facultyI, setFacultyI] = useState('');


    useEffect(
        () => {
            if (facultyI === '') {
                axios
                    .get('http://localhost:9191/exams')
                    .then(res => {
                        setExams(res.data);
                    })
            } else {
                axios
                    .get(`http://localhost:9191/students/${facultyI}`)
                    .then(res => {
                        setExams(res.data);
                    })
            }
        }, [facultyI])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa numele facultatii: </h5> <input type="text" value={facultyI} onChange={e => setFacultyI(e.target.value)} />
        </div>
    )
}
