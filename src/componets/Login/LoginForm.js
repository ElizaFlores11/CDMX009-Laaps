import React, {useState, useCallback, Fragment} from 'react'; 
import { withRouter } from 'react-router-dom';
import {Col, Row, Form, Button } from 'react-bootstrap';
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
        {bug && <div className="alert alert-danger">{bug}</div>}
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Usuario
                </Form.Label>
                <Col sm="8">
                <Form.Control 
                    type='text'
                    placeholder='ejemolo@correo.com'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Col>
                <Form.Label column sm="2">
                </Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="8">
                <Form.Control 
                    type="password" 
                    name='password'
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Button type="submit" className="mb-2" onClick={submit}>
                Entrar
            </Button>
            </Form>
        </Fragment>
    )
}

export default withRouter(LoginForm); 