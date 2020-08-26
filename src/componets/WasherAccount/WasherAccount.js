import React, {Fragment} from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
//import { Button } from 'react-bootstrap';
import './WasherAccount.scss'; 

const  WasherAccount = () =>{
   
    return(
        <Fragment>
            <HeaderAdmin />
            <p className="titulo">Cuentar del Lavador</p>
            <div>
                <i className="fas fa-user fa-5x foto"></i>
            </div>
            <div className="titulo2">Francisco Perez Flores</div>  
            <div className='washer-container'>
            <div className='icon'>
            <i className="fas fa-envelope blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     Cuenta:<br/>
                     francisvoy@gmail.com
                     </div>
            </div>
            <div className='calf'>
            </div>
            </div>

            <div className='washer-container'>
            <div className='icon'>
                <i className="fas fa-lock blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     Contraseña de la cuenta: <br/>
                     laappsfrancisco187560
                     </div>
            </div>
            <div className='calf'>
            </div>
            </div>
            
           
        </Fragment>
    )
}

export default WasherAccount