import React, {Fragment} from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
import {Container, Col, Row, Form, Button } from 'react-bootstrap';
import './WasherRegister.scss'; 

const  WasherRegister = () =>{
   
    return(
        <Fragment>
            <HeaderAdmin />
            <p className="titulo">Registro de Lavador</p>
            <div>
                <i className="fas fa-user fa-5x foto"></i>
            </div>
            <br/>
            <Form>
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type='text'
                    placeholder='Nombre Completo*'
                    name='name'
                    //onChange={(e) => setEmail(e.target.value)}
                />
                </Col>
                <Form.Label column sm="3">
                </Form.Label>
            </Form.Group>
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='sexo'
                    placeholder="Sexo*"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='fecha'
                    placeholder="Fecha de nacimiento*"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='direccion'
                    placeholder="Direccion**"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='ine'
                    placeholder="Clave de elector (INE)*"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='phone'
                    placeholder="Número de Télefono"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="text" 
                    name='email'
                    placeholder="Correo Elctronico*"
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <br/>
            <Container>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Button type="button" className="btnlogin" size="sm" style={{backgroundColor: '#47BEDB', borderColor:'#47BEDB'}} >
                Entrar
            </Button>
            </Col>
            </Row>
            </Container>
            
            </Form>
        </Fragment>
    )
}

export default WasherRegister
