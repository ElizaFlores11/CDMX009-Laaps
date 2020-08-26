import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../Logo/Logo'; 
import { Button } from 'react-bootstrap';

import './HeaderAdmin.scss'

const HeaderAdmin = () =>{
    return(
        <div className='header-container'>
            <div className='header-btnBack'>
            <Button variant="outline-info" bsClass="custom-btn">&lt;</Button>

            </div>
            <div className='header-logo'>
                <Logo small/>
            </div>
            <div className='ham-menu'>
                <Navbar collapseOnSelect expand="sm"  >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar navbar-custom" style={{backgroundColor: '#e3f2fd'}} >
                        <Nav.Link href="/PerfilAdmin">Mi Perfil</Nav.Link>
                        <Nav.Link href="/Opiniones">Opiniones</Nav.Link>
                        <Nav.Link href="/LogOut">Salir</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>                        
    )
}

export default HeaderAdmin