import React, { useContext } from 'react'

//Import Exams Context
import { ExamsContext } from '../ExamsContext';

//Import Exams Layout
import ExamLayout from '../layouts/ExamLayout';



function PenddingExams() {
    const [exams, setExams] = useContext(ExamsContext);


    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Examene in Asteptare</h1></div>
            </div>
            <div className="row mt-5">
                {exams.map((exam, index) =>
                    // <div>
                    exam.status === "in asteptare" && <ExamLayout materie={exam.course} nrLocuri={exam.seats} profesor={exam.professor} data={exam.date} key={index} isAdmin={true} />

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