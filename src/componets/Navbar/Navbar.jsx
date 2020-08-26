import React from 'react';
import {Nav} from 'react-bootstrap';
import './Navbar.scss';
const NavDown = ()=>{
    return (
      <Nav  className="nabdo"justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">
        <i class="fas fa-home"></i>Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
        <i class="fas fa-car-alt"></i>Mis autos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
        <i class="fas fa-history"></i>Historial</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
        <i class="fas fa-user-alt"></i>Mi perfil</Nav.Link>
      </Nav.Item>
    </Nav>
    )
}
;
export default NavDown;
