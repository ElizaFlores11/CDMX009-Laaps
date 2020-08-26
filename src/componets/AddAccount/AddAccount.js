import React from 'react'
import './AddAccount.scss'
import Logo from '../Logo/Logo'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const AddAccount= () =>{
    return(
        <div className='addAc-container'>
            <div className='addAc-logo-container'>
                <Logo medium/>
            </div>
            <div className='addAc-info-container'>
            <h3 className='main-titles'>Agregar cuenta</h3>
            <Form id='addAc-form'>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Banco</Form.Label>
                        <Form.Control as="select" placeholder="Banco" size="sm">
                            <option>Afirme</option>
                            <option>Banamex</option>
                            <option>Banco Inbursa</option>
                            <option>Banorte</option>
                            <option>BBVA</option>
                            <option>Baco Azteca</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label placeholder="Tipo de tarjeta">Tipo de tarjeta</Form.Label>
                    <Form.Control as="select" size="sm">
                        <option>Credito</option>
                        <option>Debito</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Número de Tarjeta</Form.Label>
                    <Form.Control type="number" placeholder="Número de tarjeta" size="sm"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vencimiento de Tarjeta</Form.Label>
                    <Form.Control type="number" placeholder="00/00" size="sm"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del Titular</Form.Label>
                    <Form.Control type="number" placeholder="Nombre del titular" size="sm"/>
                </Form.Group>
                <div className='button-container'>
                    <Button variant="primary" type="submit" id='addAc-btn'>
                        REGISTRARSE
                    </Button>
                </div>  
            </Form>
            </div>
        </div>
    )
}

export default AddAccount