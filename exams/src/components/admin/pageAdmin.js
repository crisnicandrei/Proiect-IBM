import React, { Component } from 'react'
import NavbarAdmin from '../layouts/NavbarAdmin'
import { Route, Switch } from 'react-router-dom'
import HomeAdmin from './HomeAdmin'

export default class pageAdmin extends Component {
    render() {
        return (
            <div>
                <NavbarAdmin />
                <Switch>
                    <Route path="/admin/home" component={HomeAdmin} />
                </Switch>
            </div>
        )
    }
}
