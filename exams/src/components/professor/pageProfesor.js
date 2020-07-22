import React, { Component } from 'react';

//Components layout
import NavbarProfesor from '../layouts/NavbarProfesor';

//Routers
import { Switch, Route } from 'react-router-dom';
import FormProfessor from './FormProfessor';
import HomeProfessor from './HomeProfessor';

export default class PageProfesor extends Component {
    render() {
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
}
