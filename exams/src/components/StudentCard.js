import React, { Component } from 'react'
import { Col } from 'react-bootstrap/'
import '../css/StudentCard.css'
export default class StudentCard extends Component {
    render() {
        return (
            <Col className='StudentCard block-example border border-dark'  >

                <h4>Exam {this.props.exam} </h4>
                <h4>Date {this.props.data}</h4>
                <h4>Professor {this.props.profesor}</h4>

            </Col>
        )
    }
}
