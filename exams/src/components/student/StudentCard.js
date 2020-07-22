import React from 'react'
import { Col } from 'react-bootstrap'
import '../../css/StudentCard.css'
function StudentCard(props) {

    return (
        <Col className='StudentCard '  >

            <h4>Exam {props.exam} </h4>
            <hr></hr>
            <h4>Date {props.data}</h4>
            <hr></hr>
            <h4>Professor {props.profesor}</h4>

        </Col>
    )

}
export default StudentCard;