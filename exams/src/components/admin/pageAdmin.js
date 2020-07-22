import React from 'react'
import NavbarAdmin from '../layouts/NavbarAdmin'
import { Route, Switch } from 'react-router-dom'
import HomeAdmin from './HomeAdmin'

function pageAdmin() {

    return (
        <div>
            <NavbarAdmin />
            <Switch>
                <Route path="/admin/home" component={HomeAdmin} />
            </Switch>
        </div>
    )

}
export default pageAdmin;