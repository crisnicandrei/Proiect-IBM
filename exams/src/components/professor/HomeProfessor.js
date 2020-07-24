import React, { useContext } from 'react';
import { StudentContext } from '../StudentContext';
import ExamLayout from '../layouts/ExamLayout';

function HomeProfessor() {

    const [exams] = useContext(StudentContext);
    return (
        <div className="container-fluid">
            <div className="row">
                {exams.map((exam, index) =>
                    exam.id === 1 && <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} />
                )}
            </div>

        </div>
    )
}

export default HomeProfessor;