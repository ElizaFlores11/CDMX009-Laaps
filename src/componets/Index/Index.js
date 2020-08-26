import React from 'react'
import Logo from '../Logo/Logo'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import './Index.scss'

const Index = () =>{
    let history = useHistory()

    function handleClick() {

        history.push('/register')
    }
    return(
        <div className='index-container'>
            <div className='index-logo-container'>
                <Logo big/>
            </div>
            
            <div className='welcome-container'>
                <h1 className='main-titles'>Bienvenidx</h1>
                <div className='button-container'>
                    <Button variant="primary" onClick={handleClick}>REGISTRARSE</Button>
                    <Button variant="outline-primary">INICIAR SESIÓN</Button>
                </div>
            </div>
        </div>
    )
}

export default Index