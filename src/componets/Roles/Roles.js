import React, {Fragment} from "react"; 
import { Link } from "react-router-dom";
import {Container, Col, Row, Button } from 'react-bootstrap';
import LogoLogin from '../LogoLogin/LogoLogin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import './Roles.scss';

const  Roles = () =>{
    return (
        <Fragment >
        <Container className="top">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <LogoLogin />
                </Col>
            </Row>
            <div className="aling" >
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <Link to="/Admin">
                
                <Button type="button" className="btnlogin" size="sm" style={{backgroundColor: '#47BEDB', borderColor:'#47BEDB'}} >
                    Cliente
                </Button>
            
            </Link>
            
                </Col>
            </Row>
            </div>
            <div className="aling" >
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <Link to="/Admin">
                
                <Button type="button" className="btnlogin" size="sm" style={{backgroundColor: ' #4FB690', borderColor:'#47BEDB'}} >
                    Administrador
                </Button>
            
            </Link>
            
                </Col>
            </Row>
            </div>
        </Container>
        <FooterAdmin/>
        </Fragment>
    );
}

export default Roles; 
