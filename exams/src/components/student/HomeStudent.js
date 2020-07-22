import React, { Component } from 'react';
import StudentCard from './StudentCard';
import { Row, Container, Col } from 'react-bootstrap'

export default class HomeStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exams: [
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
                    data: 'ieri',
                    profesor: 'dragomir'
                }
            ]
        }
    }
    render() {
        const examCard = this.state.exams.map(exam => {
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
    }
}