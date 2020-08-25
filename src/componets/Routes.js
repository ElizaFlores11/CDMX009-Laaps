import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login';
import Admin from './Admin/Admin'; 
const Routes = () => {

    return (
        
        <Switch>
        <Route exact path="/Admin">
            <Admin />
        </Route>
        <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes; 