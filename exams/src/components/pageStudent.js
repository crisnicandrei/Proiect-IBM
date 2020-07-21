import React, { Component } from 'react';

//Components layout
import NavbarStudent from './layouts/NavbarStudent';
import StudentCard from './StudentCard';


export default class pageStudent extends Component {
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
                <NavbarStudent />
                {examCard}
            </div>
        )
    }
}
