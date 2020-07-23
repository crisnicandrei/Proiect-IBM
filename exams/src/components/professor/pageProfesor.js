import React from 'react';

//Import Components layout and style
import NavbarProfesor from '../layouts/NavbarProfesor';
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';

//Import router-dom
import { Switch, Route } from 'react-router-dom';
//Import Professor Pages
import FormProfessor from './FormProfessor';
import HomeProfessor from './HomeProfessor';

//Import style for Professor Pages
import '../../css/Professor.css'


function PageProfesor() {

    return (
        <div>
            <NavbarProfesor />
            <Switch>
                <Route path="/prof/home" exact component={HomeProfessor} />
                <Route path="/prof/cerere" exact component={FormProfessor} />
            </Switch>
            <Footer />
        </div>
    )

}
export default PageProfesor; 
