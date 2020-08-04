import React, { useContext } from 'react'

//Import Exams Context
import { ExamsContext } from '../ExamsContext';

import axios from 'axios';
//Import Exams Layout
import ExamLayout from '../layouts/ExamLayout';



function PenddingExams() {
    const [exams, setExams] = useContext(ExamsContext);

    function remove(id) {
        axios.delete('http://localhost:9191/deleteExam/' + id)
            .then(res => {
                setExams(exams.filter(ex => ex.id !== id))
            }
            )
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Examene in Asteptare</h1></div>
            </div>
            <div className="row mt-5">
                {exams.map((exam) =>
                    // <div>
                    exam.status === "in asteptare" && <ExamLayout materie={exam.course} status={exam.status} nrLocuri={exam.seats} profesor={exam.professor} data={exam.date} academicYear={exam.academycYear} semester={exam.semester} yearOfStudy={exam.yearOfStudy} faculty={exam.faculty} key={exam.id} isPend={true} removeExam={() => remove(exam.id)}
                        updateStatus={() => {
                            const data = { status: 'acceptat' }
                            axios.put(`http://localhost:9191/updateStatus/${exam.id}`, data)
                                .then(
                                    alert("Examenul a fost acceptat")
                                )
                        }}
                    />

                )}
                {(exams.length === 0 && exams.status !== "in asteptare") &&
                    <div className="col-12 text-center">
                        <h3>Nu sunt examene in asteptare!</h3>
                    </div>
                }

            </div>
        </div>
    )
}

export default PenddingExams;