import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';

//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';


function HomeStudent() {
    const [exams] = useContext(ExamsContext);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor</h1></div>
            </div>
            <div className="row mt-5 mb-5">
                {exams.map((exam, index) =>
                    <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} isStudent={true}  />
                )}
            </div>

        </div>
    )
}
export default HomeStudent;