import React, { useContext } from 'react';
import { StudentContext } from '../StudentContext';
import ExamLayout from '../layouts/ExamLayout';

function HomeAdmin() {

    const [exams] = useContext(StudentContext);
    return (
        <div className="container-fluid">
            <div className="row">
                {exams.map((exam, index) =>
                // <div>
                    <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} isAdmin={true} />
                    
                )}
                 
            </div>

        </div>
    )

}
export default HomeAdmin;