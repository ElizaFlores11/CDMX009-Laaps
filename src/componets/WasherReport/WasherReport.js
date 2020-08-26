import React, {Fragment} from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
//import { Button } from 'react-bootstrap';
import './WasherReport.scss'; 

const  WasherReport = () =>{
   
    return(
        <Fragment>
            <HeaderAdmin />
            <p className="titulo">Lavadores</p>
            <p className="titulo2">Registrados</p>
        </Fragment>
    )
}

export default WasherReport
