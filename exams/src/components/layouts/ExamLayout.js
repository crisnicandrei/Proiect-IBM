import React, { useState, useContext } from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ExamsContext } from '../ExamsContext';
import { AiFillFileAdd } from 'react-icons/ai';
function ExamLayout({ materie, data, profesor, isAdmin,isProfessor,isStudent, removeExam, updateExam, status, isPend, addExam, deleteExam,nrLocuri }) {
    /*
        const [exams] = useState([
            {
                id: 1,
                materie: 'asdf',
                data: 'maine',
                profesor: 'greconici'
            },
            {
                id: 2,
                materie: 'ts',
                data: 'ieri',
                profesor: 'dragomir'
            },
            {
                id: 3,
                materie: 'ts',
                data: 'azi',
                profesor: 'dragomir'
            }
        ]
        );
        const examCard = exams.map(exam => {
            return <StudentCard key={exam.id}
                exam={exam.materie}
                data={exam.data}
                profesor={exam.profesor} />
        })
    
        return (
            <div>
                <Container>
                    <Row md={4}
                        xs={1}>
                        {examCard}
                    </Row>
                </Container>
            </div>
        )
    */

    function removeExams(id) {
        console.log(id);
        removeExam(id)
    }
    const [exams, setExams] = useContext(ExamsContext);
    
    const [isEditing, setEditing] = useState(false);
    function toggleForm() {
        setEditing(!isEditing);
    }
    const handleChange = (evt) => {

        setExams(evt.target.value)
    }

    const buttons =
        (
            <div>
                <FaEdit className="icons-admin-card" onClick={toggleForm}></FaEdit>
                <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
            </div>
        )

    const statusW = (
        <div>
            <hr />
            <h4>Status: {status}</h4>
            <AiFillFileAdd className="icons-admin-card" onClick={addExam}></AiFillFileAdd>
            <MdDelete className="icons-admin-card" onClick={deleteExam}></MdDelete>
        </div>
    )

    function handleUpdate(e) {
        e.preventDefault();
        updateExam(exams.id,e.target.value)
        setEditing(false);
    }

    let result;
    if (isEditing) {
        result = (
            <div className='StudentCard col-md-3 col-sm-12'>
                <form onSubmit={handleUpdate}>
                    <input type='text' value={materie} name='materie' onChange={handleChange} />
                    <input type='text' value={data} name='data' onChange={handleChange} />
                    <input type='text' value={profesor} name='profesor' onChange={handleChange} />
                    <input type='text' value={nrLocuri} name='nrLocuri' onChange={handleChange} />


                    <button>Save</button>
                </form>
            </div>
        )


    }
    else {
        result = (
            <div className='col-md-4 col-sm-12'>
                <div className="StudentCard">
                    <h4>Materia: {materie} </h4>
                    <hr />
                    <h4>Data: {data}</h4>
                    <hr />
                    {(isProfessor || isAdmin)&& <h4>Numarul de locuri: {nrLocuri}<hr/></h4>}
                    {(isStudent ||isAdmin)&& <h4>Profesor {profesor}</h4>}


                    {isPend && statusW}
                    {isAdmin ? buttons : null}

                </div>
            </div>

        )
    }
    return result
}







export default ExamLayout;