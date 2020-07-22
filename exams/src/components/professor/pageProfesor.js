import React from 'react';

//Components layout
import NavbarProfesor from '../layouts/NavbarProfesor';

//Routers
import { Switch, Route } from 'react-router-dom';
import FormProfessor from './FormProfessor';
import HomeProfessor from './HomeProfessor';

function PageProfesor() {

    return (
        <div>
            <NavbarProfesor />
            <Switch>
                <Route path="/prof/home" exact component={HomeProfessor} />
                <Route path="/prof/cerere" exact component={FormProfessor} />
            </Switch>

        </div>
    )

}
export default PageProfesor; 
