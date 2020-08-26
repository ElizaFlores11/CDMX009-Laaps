import React from 'react'
import { Switch, Route } from "react-router-dom";
import Index from './Index/Index';
import Login from './Login/Login';
import Admin from './Admin/Admin'; 
import WasherReport from './WasherReport/WasherReport'
import WasherPerfil from './WasherPerfil/WasherPerfil'
import WasherRegister from './WasherRegister/WasherRegister'
import WasherAccount from './WasherAccount/WasherAccount'
import Roles from './Roles/Roles'

const Routes = () => {

    return (
        <Switch>
        <Route exact path="/Roles">
            <Roles />
        </Route>
        <Route exact path="/WasherAccount">
            <WasherAccount />
        </Route>
        <Route exact path="/WasherRegister">
            <WasherRegister />
        </Route>
        <Route exact path="/WasherPerfil">
            <WasherPerfil />
        </Route>
        <Route exact path="/WasherReport">
            <WasherReport />
        </Route>
        <Route exact path="/Admin">
            <Admin />
        </Route>

       <Route exact path="/Login">
            <Login />
        </Route>
        <Route exact path="/">
                <Index />
            </Route>
        </Switch>
    )
}

export default Routes; 