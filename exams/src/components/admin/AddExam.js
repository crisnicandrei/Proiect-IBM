import React, { useState, useContext } from 'react'

import { ExamsContext } from '../ExamsContext'


import { Form, Container } from 'react-bootstrap'

//Import Icons
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';

import { v4 as uuidv4 } from 'uuid';

export default function AddExam() {
    const [exams, setExams] = useContext(ExamsContext);
    const [materie, setMaterie] = useState('')
    const [data, setData] = useState('')
    const [profesor, setProfesor] = useState('')

    const updateMaterie = (e) => {
        setMaterie(e.target.value);
    }

    const updateData = (e) => {
        setData(e.target.value);
    }

    const updateProfesor = (e) => {
        setProfesor(e.target.value)
    }
    const addExam = (e) => {
        e.preventDefault();
        setExams(prevExams => [...prevExams, {
            id: uuidv4(),
            materie: materie,
            data: data,
            profesor: profesor,
            status: 'acceptat'


        }])
        setMaterie('');
        setData('');
        setProfesor('');
    }
    console.log(exams);
    return (

        <Container>
            <Form className="formDesign" onSubmit={addExam}>
                <Form.Group controlId="formMaterie">
                    <Form.Label><MdBook className="form-icons" />Materie</Form.Label>
                    <Form.Control type="text" name="materie" value={materie} onChange={updateMaterie} />
                </Form.Group>
                <Form.Group controlId="formData">
                    <Form.Label><GoCalendar className="form-icons" />Data</Form.Label>
                    <Form.Control type="text" name="data" value={data} onChange={updateData} />
                </Form.Group>
                <Form.Group controlId="formProfesor">
                    <Form.Label><GoPerson className="form-icons" />Profesor</Form.Label>
                    <Form.Control type="text" name="profesor" value={profesor} onChange={updateProfesor} />
                </Form.Group>

                <div className='buttonProf'>
                    <button className="buttonDesign" type="submit">
                        Submit
                    </button>
                </div>

            </Form>
        </Container>
    )


}