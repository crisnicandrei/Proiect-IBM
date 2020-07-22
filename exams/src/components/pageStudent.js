import React, { Component } from 'react';

//Components layout
import NavbarStudent from './layouts/NavbarStudent';

//Routers
import { Switch, Route } from 'react-router-dom';
import HomeStudent from './HomeStudent';


export default class pageStudent extends Component {
    render() {

        return (
            <div>
                <NavbarStudent />
                <Switch>
                    <Route path="/stud/home" component={HomeStudent} />
                </Switch>
            </div>
        )
    }
}
