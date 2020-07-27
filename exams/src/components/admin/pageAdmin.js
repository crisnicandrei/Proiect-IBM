import React from 'react'

//Import router-dom
import { Route, Switch } from 'react-router-dom'

//Import Admin Pages
import HomeAdmin from './HomeAdmin'
import UsersList from './UsersList';

//Import Components layout and style
import NavbarAdmin from '../layouts/NavbarAdmin'
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';



function PageAdmin() {

    return (
        <div>
            <NavbarAdmin />
            <Switch>
                <Route path="/admin/home" exact component={HomeAdmin} />
                <Route path="/admin/userslist" exact component={UsersList} />
            </Switch>
            <Footer />
        </div>
    )

}
export default PageAdmin;