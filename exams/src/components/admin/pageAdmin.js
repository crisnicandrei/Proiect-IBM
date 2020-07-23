import React from 'react'

//Import router-dom
import { Route, Switch } from 'react-router-dom'

//Import Admin Pages
import HomeAdmin from './HomeAdmin'

//Import Components layout and style
import NavbarAdmin from '../layouts/NavbarAdmin'
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';


function pageAdmin() {

    return (
        <div>
            <NavbarAdmin />
            <Switch>
                <Route path="/admin/home" component={HomeAdmin} />
            </Switch>
            <Footer />
        </div>
    )

}
export default pageAdmin;