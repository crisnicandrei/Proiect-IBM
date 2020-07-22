import React, { useState } from 'react';
//Import Student Card component
import StudentCard from './StudentCard';
//Import bootstrap components
import { Row, Container } from 'react-bootstrap'

function HomeStudent() {

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


}

export default HomeStudent;