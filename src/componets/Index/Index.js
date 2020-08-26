import React from 'react'
import Logo from '../Logo/Logo'
import { Button } from 'react-bootstrap';
import './Index.scss'
import { Link } from "react-router-dom";

const Index = () =>{
    return(
        <div className='index-container'>
            <div className='index-logo-container'>
                <Logo big/>
            </div>
            
            <div className='welcome-container'>
                <h1 className='main-titles'>Bienvenidx</h1>
                <div className='button-container'>
                    <Button variant="primary">REGISTRARSE</Button>
                    <br/>
                    <Link to="/Login">
                    <Button variant="outline-primary">INICIAR SESIÓN</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index