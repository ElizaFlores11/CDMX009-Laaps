import React from 'react';
import {Alert} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const AlertUbication =()=>{
    return(
      <div>
        <Alert variant="success">

  <p>
     Laaps necesita permiso para acceder a tu ubicación
  </p>
  <hr />
  <ButtonGroup className="mb-2">
    <Button>Denegar</Button>
    <Button>Conceder</Button>
  </ButtonGroup>
</Alert>
</div>
    )
}
;
export default AlertUbication;