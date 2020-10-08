import React, {Fragment} from 'react';
import Routes from './componets/Routes'; 
import Register from './componets/Form/Form';
import NavDown from './componets/Navbar/Navbar';
import './App.scss';
import AlertUbication from './componets/AlertUbi';
import History from './componets/History'
function App() {
  return (
    <Fragment>
      <Routes />
      <Register/>
      <AlertUbication/>
      <History/>
      <NavDown/>
    </Fragment>

  );
}

export default App;