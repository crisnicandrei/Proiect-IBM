import React, { Component } from 'react';

//Components layout
import NavbarStudent from './layouts/NavbarStudent';
import StudentCard from './StudentCard';


export default class pageStudent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            exams : [
                {
                    materie:'asdf',
                    data:'maine',
                    profesor:'greconici'
                },
                {
                    materie:'ts',   
                    data:'ieri',
                    profesor:'dragomir'
                }
            ]
        }
    }
    render() {
        const examCard = this.state.exams.map (exam =>{
            return <StudentCard 
            exam={exam.materie} 
            data={exam.data} 
            profesor={exam.profesor} />})
            
        return (
            <div>
                <NavbarStudent />
                {examCard}
            </div>
        )
    }
}
