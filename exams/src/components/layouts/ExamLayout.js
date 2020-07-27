import React , {useState} from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ExamsContext } from '../ExamsContext';
function ExamLayout({ materie, data, profesor, isAdmin, removeExam,updateExam}) {
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

    //    function removeExams(id)
    //    {
    //     console.log(id);
    //     removeExam(id)
    //    }
    // const [exams, setExams] = useContext(ExamsContext);
   
    const [isEditing,setEditing]=useState(false);
    function toggleForm()
    {
        setEditing(!isEditing);
    }
    // function handleChange(evt)
    // {
    //     this.setState({
    //         [evt.target.name]:evt.target.value
    //     })
    // }
    const buttons =
        (
            <div>
                <FaEdit className="icons-admin-card" onClick={toggleForm}></FaEdit>
                <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
            </div>
        )
    // function handleUpdate(e)
    // {
    //     e.preventDefault();
    //     this.updateExam;
    //     setEditing(false);
    // }

    let result ;
    if(isEditing)
        {
            result = (
                <div className='StudentCard col-md-3 col-sm-12'>
                    <form /*onSubmit={handleUpdate}*/>
                    <input type='text' value={materie} name='materie' /*onChange={handleChange}*/></input>
                    <input type='text' value={data} name='data' /*onChange={handleChange}*/></input>
                    <input type='text' value={profesor} name='profesor' /*onChange={handleChange}*/></input>

                    <button>Save</button>
                    </form>
                </div>
            )

            
        }
        else
        {
            result=(
                <div className='StudentCard col-md-3 col-sm-12'>

                <h4>Materia: {materie} </h4>
                <hr />
                <h4>Data: {data}</h4>
                <hr />
                <h4>Profesor: {profesor}</h4>
                {isAdmin ? buttons : null}
    
    
            </div>

            )
        }
    return result

        

    

}

export default ExamLayout;