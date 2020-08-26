import React from 'react'
import Card from 'react-bootstrap/Card'
import {Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import './DatosAdmin.scss';

const  DatosAdmin = () =>{
   
    return(
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <p className="titulo">Administración</p>
                    <Card border="ligh" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title className="titulo2">Directora</Card.Title>
                    <Card.Text className="text">
                        Lucile  
                        <div className='icono'><i class="fas fa-user fa-5x"></i></div>
                        <br/>
                        
                    <Button className="btn"type="button" id='goPerfil' style={{backgroundColor: '#4FB690', borderColor:'#4FB690', borderRadius:'20px'}}>
                        VER PERFIL
                    </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>    
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
        
    ); 
}

export default DatosAdmin