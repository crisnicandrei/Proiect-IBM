import React, { useContext, useEffect } from 'react';

//Import Context for Exams
import { ExamsContext,DataContext } from '../ExamsContext';
//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';

//Import style for cards
import '../../css/Admin.css';

import AddExam from './AddExam'
import axios from 'axios'
import { CurrentUserContext } from '../LoginContext';

function HomeAdmin() {


    const [datas,setDatas]=useContext(DataContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const [exams, setExams] = useContext(ExamsContext);
    function remove(id) {
        axios.delete('http://localhost:9191/deleteExam/' + id)
            .then(res => {
                setExams(exams.filter(ex => ex.id !== id))
            }
            )
    }
    function update(id) {
        // setExams(exams.map((exam) => (exam.id === id ? updatedExam : exam)))
        console.log(id);
    }
    
    console.log(exams);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor</h1></div>
            </div>
            <div className="row mt-5">
                {exams.map((exam, index) =>

                    exam.status === "acceptat" && <ExamLayout materie={exam.course} status={exam.status} nrLocuri={exam.seats} profesor={exam.professor} data={exam.date} academicYear={exam.academycYear} semester={exam.semester} yearOfStudy={exam.yearOfStudy} faculty={exam.faculty} key={index} isAdmin={true} removeExam={() => remove(exam.id)} updateExam={() => 
                    axios.put(`http//localhost:9191/updateExam/${exam.id}`,datas).then(alert('Succes!'))} />

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