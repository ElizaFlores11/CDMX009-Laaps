import React from 'react';
import { useHistory } from "react-router-dom";


import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Register =() =>{
    let history = useHistory()

    function handleClick() {

        history.push('/addAcount')
    }
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
</Row> <br></br>

<Form.Control type="text" placeholder="Telefono" />

<Form.Group controlId="formGroupEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
</Form.Group>
<Form.Group controlId="formGroupPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>

<Button variant="primary" type="submit" onClick={handleClick}>
  Registrarse
</Button>
</Form>

<Form>
  <Form.Label>Ingrese los datos de su auto</Form.Label>
  <Form.Control type="text" placeholder="Marca" /><br></br>
  <Form.Control type="text" placeholder="Placas" /><br></br>
  <Form.Control type="text" placeholder="Modelo" /><br></br>
  <Form.Control type="text" placeholder="Color del auto" /><br></br>
</Form>
<Form>
<Form.File id="formcheck-api-regular">
      <Form.File.Label>Suba una foto de su auto</Form.File.Label>
      <Form.File.Input />
    </Form.File>
</Form>

    </div>
  )

}
;
export default Register;