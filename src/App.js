import React, {Fragment} from 'react';
import Routes from './componets/Routes'; 
import Register from './componets/Form';
import './App.scss';
function App() {
  return (
    <Fragment>
      <Routes />
      <Register/>
     
    </Fragment>
  );
}

export default App;