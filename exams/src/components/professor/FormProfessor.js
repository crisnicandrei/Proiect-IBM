import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import '../../css/FormProfessor.css'
export default class FormProfessor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yearOfStudy: '',
      Semester: '',
      Faculty: '',
      nSeats: '',
      course: '',
      teacher: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>




          <Form.Group controlId="formBasicYear">
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" placeholder="Year" id='formBasicSeats' name='nSeats' value={this.state.nSeats} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicSemester">
            <Form.Label>Semester</Form.Label>
            <Form.Control type="text" placeholder="Seats" id='formBasicSemester' name='Semester' value={this.state.Semester} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicFaculty">
            <Form.Label>Semester</Form.Label>
            <Form.Control type="text" placeholder="Faculty" id='formBasicFaculty' name='Faculty' value={this.state.Faculty} onChange={this.handleChange} />
          </Form.Group>


          <Form.Group controlId="formBasicSeats">
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control type="text" placeholder="Seats" id='formBasicSeats' name='nSeats' value={this.state.nSeats} onChange={this.handleChange} />
          </Form.Group>



          <Form.Group controlId="formBasicCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" placeholder="Course" id="formBasicCourse" name="course" value={this.state.course} onChange={this.handleChange} />
          </Form.Group>



          <Form.Group controlId="formBasicTeacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control type="text" placeholder="Teacher Name" id='formBasicTeacher' name='teacher' value={this.state.teacher} onChange={this.handleChange} />
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
}
