import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Register =() =>{
  return(
    <div>
      <Form>

<Row>
  <Col>
    <Form.Control placeholder="Nombre" />
  </Col>
  <Col>
    <Form.Control placeholder="Apellido" />
  </Col>
</Row>


<Form.Group controlId="formGroupEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
</Form.Group>
<Form.Group controlId="formGroupPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>

<Button variant="primary" type="submit">
  Registrarse
</Button>
</Form>

    </div>
  )

}
;
export default Register;