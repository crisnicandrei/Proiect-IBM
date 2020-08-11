import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ExamsContext } from '../ExamsContext';

export default function SearchbarYear() {

    const [, setExams] = useContext(ExamsContext);
    const [yearOfStudy, setyearOfStudy] = useState('');


    useEffect(
        () => {
            if (yearOfStudy === '') {
                axios
                    .get('http://localhost:9191/exams')
                    .then(res => {
                        setExams(res.data);
                    })
            } else {
                axios
                    .get(`http://localhost:9191/students/exams/${yearOfStudy}`)
                    .then(res => {
                        setExams(res.data);
                    })
            }
        }, [yearOfStudy])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa anul de studiu: </h5> <input type="text" value={yearOfStudy} onChange={e => setyearOfStudy(e.target.value)} />
        </div>
    )
}
