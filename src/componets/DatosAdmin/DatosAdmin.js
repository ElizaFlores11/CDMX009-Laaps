import React from 'react'
import Card from 'react-bootstrap/Card'
import {Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

const  DatosAdmin = () =>{
   
    return(
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <p>Administrador</p>
                    <Card border="success" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Directora</Card.Title>
                    <Card.Text>
                        Lucile 
                        <div className='button-container'>
                    <Button variant="success" type="button" id='goPerfil'>
                        Ver Perfil
                    </Button>

                </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <p>Reporte Dia</p>
                    
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
        
    ); 
}

export default DatosAdmin