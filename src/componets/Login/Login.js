import React from 'react'; 
import {Container, Col, Row } from 'react-bootstrap'
import LoginForm from './LoginForm';
import './login.scss'
const Login = () =>{
    return(
            <Container className='top-login'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className='login'>
                            <LoginForm/>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
 
    ); 
}
export default Login; 
