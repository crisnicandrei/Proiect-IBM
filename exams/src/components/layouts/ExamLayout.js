import React from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';
//Import bootstrap components
import { Col } from 'react-bootstrap'

function ExamLayout({ materie, data, profesor }) {
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
    return (

        <div className='StudentCard col-md-3 col-12'>

            <h4>Materia: {materie} </h4>
            <hr />
            <h4>Data: {data}</h4>
            <hr />
            <h4>Profesor: {profesor}</h4>

        </div>

    );

}

export default ExamLayout;