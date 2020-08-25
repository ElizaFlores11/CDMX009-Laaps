import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login';
import Admin from './Admin/Admin'; 
import Roles from './Roles/Roles'; 
import Ejemplo from './Roles/Ejemplo';
const Routes = () => {

    return (
        
        <Switch>
        <Route exact path="/Admin">
            <Admin />
        </Route>
        <Route exact path="/Ejemplo">
            <Ejemplo />
        </Route>
        <Route exact path="/Roles">
            <Roles />
        </Route>
        <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes; 