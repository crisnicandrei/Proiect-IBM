import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';
//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';
//Import style for cards
import '../../css/Admin.css';

import AddExam from './AddExam'
import { CurrentUserContext } from '../LoginContext';

function HomeAdmin() {



    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const [exams, setExams] = useContext(ExamsContext);
    function remove(id) {
        setExams(exams.filter(ex => ex.id !== id))
    }
    function update(id, updatedField) {
        const updatedExam = exams.map(exam => {
            if (exam.id === id) {
                return {
                    ...exam, [exams]: updatedField
                }
            }
            return exam;
        })
        setExams(updatedExam);
        console.log(updatedField);
    }

    console.log(exams);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor</h1></div>
            </div>
            <div className="row mt-5">
                {exams.map((exam, index) =>

                    exam.status === "acceptat" && <ExamLayout materie={exam.course} nrLocuri={exam.seats} profesor={exam.professor} data={exam.date} key={index} isAdmin={true} removeExam={() => remove(exam.id)} updateExam={() => update(exam.id)} />

                )}

            </div>
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Adauga un examen</h1></div>
            </div>
            <div className='row mt-5'>
                <AddExam />
            </div>

        </div>
    )

}
export default HomeAdmin;