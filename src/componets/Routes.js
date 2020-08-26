import React, {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dlogin from './Login/Dlogin';
import Register from './Register/Register'
import Index from './Index/Index'
import AddAccount from './AddAccount/AddAccount';
import Home from './Home/Home'

const Routes = () => {

    return (
        <Router>
        <Switch>
          <Fragment>
              <Fragment>
                <Route  path ='/' exact component = {Index} />
              </Fragment>
            <Fragment>
            <Fragment>
                <Route   path= '/register' component= {Register}/>
              </Fragment>
              <Fragment>
                <Route   path= '/addAcount' component= {AddAccount}/>
              </Fragment>
              <Fragment>
                <Route  path = '/home' component = {Home}/>
              </Fragment>
            </Fragment>    
          </Fragment>
        </Switch>
    </Router>
    
    )
}

export default Routes; 