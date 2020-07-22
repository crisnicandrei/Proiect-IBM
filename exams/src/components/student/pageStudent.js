import React from 'react';

//Components layout and style
import NavbarStudent from '../layouts/NavbarStudent';
import '../../css/Navbar.css';

//import router-dom
import { Switch, Route } from 'react-router-dom';

//import Student Pages
import HomeStudent from './HomeStudent';

//Import css for Student
import '../../css/Student.css'

function pageStudent() {


    return (
        <div>
            <NavbarStudent />
            <Switch>
                <Route path="/stud/home" component={HomeStudent} />
            </Switch>
        </div>
    )

}

export default pageStudent;
