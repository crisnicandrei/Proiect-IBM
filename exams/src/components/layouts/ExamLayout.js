import React, { useState, useContext } from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ExamsContext } from '../ExamsContext';
import { AiFillFileAdd } from 'react-icons/ai';
import { Form, Container } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';
import { FaChair, FaSchool } from 'react-icons/fa';
function ExamLayout({ materie, data, profesor, isAdmin,isProfessor,isStudent, removeExam, updateExam, status, isPend, addExam, deleteExam,nrLocuri,academicYear,semester,yearOfStudy,faculty }) {
    
    
    const [yearOStudy, setYearOfStudy] = useState('');
  const [semesterr, setSemester] = useState('');
  const [facultty, setFaculty] = useState('');
  const [nSeats, setNSeats] = useState('');
  const [course, setCourse] = useState('');
  const [teacher, setTeacher] = useState('');
  const [date, setDate] = useState('');
  const [academycYear, setAcademicYear] = useState('')

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

    function handleSubmit(e) {
        e.preventDefault();
        updateExam(exams.id)
        setEditing(false);
    }
    let adminFields = (
        <div>
            <h4>Semesrul:{semester}</h4>
            <hr></hr>
            <h4>An academic:{academicYear}</h4>
            <hr></hr>
            <h4>An de studiu:{yearOfStudy}</h4>
            <hr></hr>
            <h4>Facultatea:{faculty}</h4>
        </div>
    )
    let result;
    if (isEditing) {
        result = (
            <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12 text-center"><h1 className="title">Cerere programare examen</h1></div>
      </div>
      <Container className="mt-5 mb-5">
        <Form className="formDesign" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicYear">
            <Form.Label><AiFillCalendar className="form-icons" />Year</Form.Label>
            <Form.Control type="text" name='yearOfStudy' value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicSemester">
            <Form.Label><GoCalendar className="form-icons" />Semester</Form.Label>
            <Form.Control type="text" name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicFaculty">
            <Form.Label><FaSchool className="form-icons" />Faculty</Form.Label>
            <Form.Control type="text" name='faculty' value={faculty} onChange={(e) => setFaculty(e.target.value)} />
          </Form.Group>


          <Form.Group controlId="formBasicSeats">
            <Form.Label><FaChair className="form-icons" />Number of Seats</Form.Label>
            <Form.Control type="text" name='nSeats' value={nSeats} onChange={(e) => setNSeats(e.target.value)} />
          </Form.Group>



          <Form.Group controlId="formBasicCourse">
            <Form.Label><MdBook className="form-icons" />Course</Form.Label>
            <Form.Control type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
          </Form.Group>



          <Form.Group controlId="formBasicTeacher">
            <Form.Label><GoPerson className="form-icons" />Teacher</Form.Label>
            <Form.Control type="text" name='teacher' value={teacher} onChange={(e) => setTeacher(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicAcademicYear">
            <Form.Label><GoPerson className="form-icons" />An academic</Form.Label>
            <Form.Control type="text" name='academicYear' value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label><GoPerson className="form-icons" />Date</Form.Label>
            <Form.Control type="text" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>

          <div className='buttonProf'>
            <button className="buttonDesign" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Container>
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
                    {(isStudent ||isAdmin)&& <div><h4>Profesor {profesor}</h4><hr></hr></div>}
                    {(isAdmin && adminFields)}


                    {isPend && statusW}
                    {isAdmin ? buttons : null}

                </div>
            </div>

        )
    }
    return result
}







export default ExamLayout;