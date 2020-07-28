import React, { useState, useContext } from 'react'

//Import bootstrap components
import { Form, Container } from 'react-bootstrap'
import { wExamsContext } from '../ExamsContext';

//Import Icons
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';
import { FaChair, FaSchool } from 'react-icons/fa';
import { AiFillCalendar } from 'react-icons/ai';
//Import uuid
import { v4 as uuidv4 } from 'uuid';

function FormProfessor() {
  const [wExams, setWExams] = useContext(wExamsContext);
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [semester, setSemester] = useState('');
  const [faculty, setFaculty] = useState('');
  const [nSeats, setNSeats] = useState('');
  const [course, setCourse] = useState('');
  const [teacher, setTeacher] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    setWExams(prevExams => [...prevExams, {
      id: uuidv4(),
      materie: course,
      data: yearOfStudy,
      profesor: teacher,
      status: 'asteptare'
    }])
    setYearOfStudy('');
    setSemester('');
    setFaculty('');
    setNSeats('');
    setCourse('');
    setTeacher('');
  }
  console.log(wExams);
  return (
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


export default FormProfessor;
