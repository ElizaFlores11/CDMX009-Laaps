import React, {Fragment} from 'react';
import Routes from './componets/Routes'; 
import Register from './componets/Form';
import NavDown from './componets/Navbar';
import './App.scss';
function App() {
  return (
    <Fragment>
      <Routes />
      <Register/>
      <NavDown/>
    </Fragment>

  );
}

export default App;