import React, { useState, useContext } from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';
import axios from 'axios';
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ExamsContext } from '../ExamsContext';
import { AiFillFileAdd } from 'react-icons/ai';
import { Form } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';
import { FaChair, FaSchool } from 'react-icons/fa';
export default function ExamLayout({ idExam, materie, data, profesor, isAdmin, isProfessor, isStudent, removeExam, updateExam, status, isPend, updateStatus, nrLocuri, academicYear, semester, yearOfStudy, faculty }) {

  const [exams, setExams] = useContext(ExamsContext);
  const [YearOfStudy, setYearOfStudy] = useState(yearOfStudy);
  const [Semester, setSemester] = useState(semester);
  const [Faculty, setFaculty] = useState(faculty);
  const [NrSeats, setNSeats] = useState(nrLocuri);
  const [Course, setCourse] = useState(materie);
  const [Teacher, setTeacher] = useState(profesor);
  const [Date, setDate] = useState(data);
  const [AcademycYear, setAcademicYear] = useState(academicYear);
  const buttons =
    (
      <div>
        <FaEdit className="icons-admin-card" onClick={toggleForm}></FaEdit>
        <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
      </div>
    )

  const statusW = (
    <div>
      <h5>Numarul de locuri: {nrLocuri}</h5><hr />
      <h5>Profesor: {profesor}</h5><hr />
      <h5>Semestrul: {semester}</h5>
      <hr></hr>
      <h5>An academic: {academicYear}</h5>
      <hr></hr>
      <h5>An de studiu: {yearOfStudy}</h5>
      <hr></hr>
      <h5>Facultatea: {faculty}</h5>
      <hr />
      <h5>Status: {status}</h5>
      <AiFillFileAdd className="icons-admin-card" onClick={updateStatus}></AiFillFileAdd>
      <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
    </div>
  )
  const [isEditing, setEditing] = useState(false);

  function removeExams(id) {
    removeExam(id)
  }



  function toggleForm() {
    setEditing(!isEditing);
  }



  function handleSubmit(e) {
    e.preventDefault();
    const examUpdate = {
      date: Date,
      yearOfStudy: YearOfStudy,
      semester: Semester,
      academycYear: AcademycYear,
      course: Course,
      faculty: Faculty,
      status: 'acceptat',
      professor: Teacher,
      seats: NrSeats
    };
    axios.put(`http://localhost:9191/updateExam/${idExam}`, examUpdate)
      .then(
        axios.get('http://localhost:9191/exams').then(res => {
          setExams(res.data);
          console.log(res.data);
        })
      )

    setEditing(false);
  }







  let adminFields = (
    <div>
      <h5>Semestrul: {semester}</h5>
      <hr></hr>
      <h5>An academic: {academicYear}</h5>
      <hr></hr>
      <h5>An de studiu: {yearOfStudy}</h5>
      <hr></hr>
      <h5>Facultatea: {faculty}</h5>
    </div>
  )
  let result;
  if (isEditing) {
    result = (
      <div className="col-md-4 col-sm-12">
        <div className="StudentCard">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicYear">
              <Form.Label><AiFillCalendar className="form-icons" />Year</Form.Label>
              <Form.Control type="text" name='yearOfStudy' value={YearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicSemester">
              <Form.Label><GoCalendar className="form-icons" />Semester</Form.Label>
              <Form.Control type="text" name='semester' value={Semester} onChange={(e) => setSemester(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicFaculty">
              <Form.Label><FaSchool className="form-icons" />Faculty</Form.Label>
              <Form.Control type="text" name='faculty' value={Faculty} onChange={(e) => setFaculty(e.target.value)} />
            </Form.Group>


            <Form.Group controlId="formBasicSeats">
              <Form.Label><FaChair className="form-icons" />Number of Seats</Form.Label>
              <Form.Control type="text" name='nSeats' value={NrSeats} onChange={(e) => setNSeats(e.target.value)} />
            </Form.Group>



            <Form.Group controlId="formBasicCourse">
              <Form.Label><MdBook className="form-icons" />Course</Form.Label>
              <Form.Control type="text" name="course" value={Course} onChange={(e) => setCourse(e.target.value)} />
            </Form.Group>



            <Form.Group controlId="formBasicTeacher">
              <Form.Label><GoPerson className="form-icons" />Teacher</Form.Label>
              <Form.Control type="text" name='teacher' value={Teacher} onChange={(e) => setTeacher(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicAcademicYear">
              <Form.Label><GoPerson className="form-icons" />An academic</Form.Label>
              <Form.Control type="text" name='academicYear' value={AcademycYear} onChange={(e) => setAcademicYear(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label><GoPerson className="form-icons" />Date</Form.Label>
              <Form.Control type="text" name='date' value={Date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>

            <div className='buttonProf'>
              <button className="buttonDesign" type="submit">
                Submit
            </button>&nbsp;
            <button className="buttonDesign" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </Form>
        </div>
      </div>
    )


  }
  else {
    result = (
      <div className='col-md-4 col-sm-12'>
        <div className="StudentCard">
          <h5>Materia: {materie} </h5>
          <hr />
          <h5>Data: {data}</h5>
          <hr />
          {(isProfessor || isAdmin) && <h5>Numarul de locuri: {nrLocuri}<hr /></h5>}
          {(isStudent || isAdmin) && <div><h5>Profesor: {profesor}</h5><hr></hr></div>}
          {(isAdmin && adminFields)}


          {isPend && statusW}
          {isAdmin ? buttons : null}

        </div>
      </div>

    )
  }
  return result
}


