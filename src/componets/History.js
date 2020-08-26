import React from 'react';
//import 'react-bootstrap-card/react-bootstrap-polyfill';
import {Media }from 'react-bootstrap';
import {Card } from 'react-bootstrap';
import bmwe30 from '/home/laboratoria158-am/Documentos/CDMX009-Laaps/src/assets/bmwe30.jpg';
import volvoxc90 from '../assets/volvoxc90.jpg'
import nissan350z from '../assets/nissan350z.jpg';
const History =() =>{
    return(
     
     <ul className="list-unstyled">
       <Card>
  <Media as="li">
    <img
      width={200}
      height={150}
      className="mr-3"
      src={bmwe30}
      alt="Generic placeholder"
    />
    <Media.Body>
      <ul>
        <li>Marca y modelo: BMW e30</li>
        <li>Placas AXY-589</li>
        <li>Método de pago:Tarjeta</li>
        <li>Trabajador:Rodrigo</li>
      </ul>

<small className="text-muted">Fecha:11/08/2020</small>
    </Media.Body>
  </Media>
  </Card>

<Card>
  <Media as="li">
    <img
      width={200}
      height={150}
      className="mr-3"
      src={volvoxc90}
      alt="Generic placeholder"
    />
    <Media.Body>
      <ul>
      <li>Marca y modelo: Volvo xc90</li>
        <li>Placas RBO-206</li>
        <li>Método de pago:Efectivo</li>
        <li>Trabajador:Armando</li>
      </ul>

<small className="text-muted">Fecha:11/08/2020</small>
    </Media.Body>
  </Media>
      </Card>

      <Card>
  <Media as="li">
    <img
      width={200}
      height={150}
      className="mr-3"
      src={nissan350z}
      alt="Generic placeholder"
    />
    <Media.Body>
      <ul>
      <li>Marca y modelo: BMW Nissan 350z</li>
        <li>Placas WYV-790</li>
        <li>Método de pago:Tarjeta</li>
        <li>Trabajador:Julian</li>
      </ul>

<small className="text-muted">Fecha:08/06/2020</small>
    </Media.Body>
  </Media>
  </Card>
</ul>

    
    )
}
;
export default History;
