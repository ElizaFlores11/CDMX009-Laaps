import React from 'react'
import Logo from '../Logo/Logo'
import { Button } from 'react-bootstrap';

const Index = () =>{
    return(
        <div className='index-container'>
            <Logo big/>
            <div className='welcome-container'>
                <h1 className='main-titles'>Bienvenidx</h1>
                <Button variant="primary">REGISTRARSE</Button>
                <Button variant="outline-primary">INICIAR SESIÓN</Button>
            </div>
        </div>
    )
}

export default Index