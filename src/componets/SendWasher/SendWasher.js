import React from 'react'
import './SendWasher.scss'
import Header from '../Header/Header'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';



const SendWasher = () =>{
    return(
        <>
            <Header />
            <div className='sndWasher-container'>
                <h2 className='main-titles'>Tu servicio</h2>
                <Form id='addAc-form'>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label placeholder="Elije tu auto">Elige tu auto</Form.Label>
                        <Form.Control as="select" size="sm">
                            <option>Aveo - 1253GYH</option>
                            <option>Mazda - 345ASDJ</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <div className='car-img-container'>
                </div> 
                <div className='address-info'>
                    <h4>Tu auto se encuentra en:</h4>
                    <div className='green-address'></div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Agendar</Form.Label>
                        <Form.Control as="select" size="sm">
                            <option>Para mas tarde</option>
                            <option>Ahora mismo</option>                            
                        </Form.Control>                       
                    </Form.Group>
                    <div className='date'></div>
                </div>
                <div className='payment'>
                    <div className='pay-title'><p>MÉTODO DE PAGO</p></div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label placeholder="Elije tu auto">Método de pago</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>Efectivo</option>
                                <option>Tarjeta</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>                    
                </div>       
                <div className='sndWasher-bts'>
                    <Button variant="primary">ACEPTAR</Button>
                    <Button variant="outline-primary">CANCELAR</Button>
                </div>
            </div>
        </>
    )
}

export default SendWasher