import React, { useState, useContext } from 'react'

import { ExamsContext } from '../ExamsContext'


import { Form, Button, Container } from 'react-bootstrap'

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
            <Form onSubmit={addExam}>
                <Form.Group controlId="formMaterie">
                    <Form.Label>Materie</Form.Label>
                    <Form.Control type="text" name="materie" value={materie} onChange={updateMaterie} />
                </Form.Group>
                <Form.Group controlId="formData">
                    <Form.Label>Data</Form.Label>
                    <Form.Control type="text" name="data" value={data} onChange={updateData} />
                </Form.Group>
                <Form.Group controlId="formProfesor">
                    <Form.Label>Profesor</Form.Label>
                    <Form.Control type="text" name="profesor" value={profesor} onChange={updateProfesor} />
                </Form.Group>

                <Button type="submit">Submit</Button>

            </Form>
        </Container>
    )


}