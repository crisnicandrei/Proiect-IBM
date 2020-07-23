import React, { useState } from 'react'
//Import bootstrap components
import { Form, Button, Container } from 'react-bootstrap'


function FormProfessor() {
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [semester, setSemester] = useState('');
  const [faculty, setFaculty] = useState('');
  const [nSeats, setNSeats] = useState('');
  const [course, setCourse] = useState('');
  const [teacher, setTeacher] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    alert(`An :${yearOfStudy} Semestru: ${semester} Facultate: ${faculty} Numar de locuri: ${nSeats} Curs:${course} Profesor:${teacher}`);
    setYearOfStudy('');
    setSemester('');
    setFaculty('');
    setNSeats('');
    setCourse('');
    setTeacher('');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>




        <Form.Group controlId="formBasicYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Year" name='yearOfStudy' value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicSemester">
          <Form.Label>Semester</Form.Label>
          <Form.Control type="text" placeholder="Semester" name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicFaculty">
          <Form.Label>Faculty</Form.Label>
          <Form.Control type="text" placeholder="Faculty" name='faculty' value={faculty} onChange={(e) => setFaculty(e.target.value)} />
        </Form.Group>


        <Form.Group controlId="formBasicSeats">
          <Form.Label>Number of Seats</Form.Label>
          <Form.Control type="text" placeholder="Seats" name='nSeats' value={nSeats} onChange={(e) => setNSeats(e.target.value)} />
        </Form.Group>



        <Form.Group controlId="formBasicCourse">
          <Form.Label>Course</Form.Label>
          <Form.Control type="text" placeholder="Course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
        </Form.Group>



        <Form.Group controlId="formBasicTeacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control type="text" placeholder="Teacher Name" name='teacher' value={teacher} onChange={(e) => setTeacher(e.target.value)} />
        </Form.Group>

        <div className='buttonProf'>
          <Button variant="primary" type="submit">
            Submit
            </Button>
        </div>
      </Form>
    </Container>
  )
}


export default FormProfessor;
