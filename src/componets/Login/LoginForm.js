import React, {useState, useCallback, Fragment} from 'react'; 
import LogoLogin from '../LogoLogin/LogoLogin';
import { withRouter } from 'react-router-dom';
import {Container, Col, Row, Form, Button } from 'react-bootstrap';
import {firebase} from '../../firebase/configFirebase'; 
require("firebase/auth");

const LoginForm = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bug, setBug] = useState(null);

    /*funciion de onclick en button */
    const submit = async (e) => {
        e.preventDefault();
        try {
            login(); 
        }
        catch (err) {
            console.log(err);
        }
    };

    /*funcion ´para logearse*/
    const login = useCallback(async () => {
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(res);
            props.history.push('/Admin');
        } catch (error) {
            //console.log(error);
            if (error.code === "auth/user-not-found") {
                setBug("Usuario no registrado");
              }
              if (error.code === "auth/wrong-password") {
                setBug("Contraseña incorrecta");
              }
              if (error.code === "auth/invalid-email") {
                setBug("Email con formato equivocado");
              }
        }
    },
       [email, password, props.history],
    );
    
    return (
    <Fragment >
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <LogoLogin />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <p className='titulo'>Bienvenido</p>
                </Col>
            </Row>
            
        </Container>
       
        {bug && <div className="alert alert-danger">{bug}</div>}
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type='text'
                    placeholder='Correo Eléctronico'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Col>
                <Form.Label column sm="3">
                </Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Col md={{ span: 6, offset: 3 }}>
                <Form.Control 
                    type="password" 
                    name='password'
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Container>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Button type="button" className="btnlogin" size="sm" style={{backgroundColor: '#47BEDB', borderColor:'#47BEDB'}} onClick={submit}>
                Entrar
            </Button>
            </Col>
            </Row>
            </Container>
            
            </Form>
        </Fragment>
    )
}

export default withRouter(LoginForm); 