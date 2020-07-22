import React from 'react'
import { Col } from 'react-bootstrap'
import '../../css/StudentCard.css'
function StudentCard(props) {

    return (
        <Col className='StudentCard block-example '  >

            <h4>Exam {props.exam} </h4>
            <h4>Date {props.data}</h4>
            <h4>Professor {props.profesor}</h4>

        </Col>
    )

}
export default StudentCard;