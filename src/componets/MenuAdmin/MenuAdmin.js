import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Container, Col, Row } from 'react-bootstrap'

const MenuAdmin = () =>{
   
    return(
        <Container className='headeradmin'>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={10}>
                    <Navbar collapseOnSelect expand="md" bg="success" variant="dark" className="ordermenu">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/WasherRegister">Registro Lavador</Nav.Link>
                            <NavDropdown title="Reportes" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/ReportDay">Día</NavDropdown.Item>
                            <NavDropdown.Item href="/ReportWasher">Lavador</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        <Nav>
                            <Nav.Link href="/LogOut">Salir</Nav.Link>
                                    </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
      </Container>
    )
}

export default MenuAdmin