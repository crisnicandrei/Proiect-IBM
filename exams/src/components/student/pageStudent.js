import React from 'react';

//Components layout
import NavbarStudent from '../layouts/NavbarStudent';

//Routers
import { Switch, Route } from 'react-router-dom';
import HomeStudent from './HomeStudent';


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
