import React, { Component } from 'react'

export default class StudentCard extends Component {
    render() {
        return (
            <div>
                
                <h4>Exam {this.props.exam} </h4>
                <h4>Date {this.props.data}</h4>
                <h4>Professor {this.props.profesor}</h4>
            </div>
        )
    }
}
