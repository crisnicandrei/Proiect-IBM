import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';
//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';
//Import style for cards
import '../../css/Admin.css';

function HomeAdmin() {



    const [exams, setExams] = useContext(ExamsContext);
    function remove(id) {
        setExams(exams.filter(ex => ex.id !== id))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                {exams.map((exam, index) =>
                    // <div>
                    <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} isAdmin={true} removeExam={() => remove(exam.id)} />

                )}

            </div>

        </div>
    )

}
export default HomeAdmin;