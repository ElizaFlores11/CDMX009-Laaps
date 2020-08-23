import React from 'react'
import { Switch, Route } from "react-router-dom";
import Dlogin from './Login/Dlogin';

const Routes = () => {

    return (
        <Switch>
        <Route exact path="/">
                <Dlogin />
            </Route>
        </Switch>
    )
}

export default Routes; 