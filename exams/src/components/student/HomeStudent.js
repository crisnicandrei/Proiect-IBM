import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';

//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';


function HomeStudent() {
    const [exams] = useContext(ExamsContext);
    return (
        <div className="container-fluid">
            <div className="row">
                {exams.map((exam, index) =>
                    <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} />
                )}
            </div>

        </div>
    )
}
export default HomeStudent;