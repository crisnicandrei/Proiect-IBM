import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';

//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';

function HomeProfessor() {

    const [exams] = useContext(ExamsContext);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor</h1></div>
            </div>
            <div className="row">
                {exams.map((exam, index) =>
                    <ExamLayout materie={exam.course}  data={exam.date} nrLocuri={exam.seats} key={index} isProfessor={true}/>
                )}
            </div>

        </div>
    )
}

export default HomeProfessor;