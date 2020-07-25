import React, { useContext } from 'react';
import { StudentContext } from '../StudentContext';
import ExamLayout from '../layouts/ExamLayout';

function HomeAdmin() {

    

    const [exams,setExams] = useContext(StudentContext);
    function remove(id)
    {
        setExams(exams.filter(ex => ex.id != id))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                {exams.map((exam, index) =>
                // <div>
                    <ExamLayout materie={exam.materie} profesor={exam.profesor} data={exam.data} key={index} isAdmin={true} removeExam={()=>remove(exam.id)}/>
                    
                )}
                 
            </div>

        </div>
    )

}
export default HomeAdmin;