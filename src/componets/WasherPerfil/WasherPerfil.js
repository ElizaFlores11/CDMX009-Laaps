import React, {Fragment} from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
//import { Button } from 'react-bootstrap';
import './WasherPerfil.scss'; 

const  WasherPerfil = () =>{
   
    return(
        <Fragment>
            <HeaderAdmin />
            <p className="titulo">Perfil de Lavador</p>
            <div>
                <i className="fas fa-user fa-5x foto"></i>
            </div>
            <div className="titulo2">Francisco Perez Flores</div>
            <div className='washer-container'>
            <div className='icon'>
            <i className="fas fa-user blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     Hombre<br/>
                     Fecha Nacimiento: 05/12/1990
                     </div>
            </div>
            <div className='calf'>
            </div>
            </div>

            <div className='washer-container'>
            <div className='icon'>
                <i className="fas fa-phone-alt blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     55 85 98 54 71
                     </div>
            </div>
            <div className='calf'>
            </div>
            </div>
            
            <div className='washer-container'>
            <div className='icon'>
                <i className="fas fa-map-marker-alt blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     Av. de la Torre #43 Col. Roma, 
                     <br/>
                     Ciudad de México
                </div>
            </div>
            <div className='calf'>
            </div>
            </div>
            <div className='washer-container'>
            <div className='icon'>
                <i className="fas fa-address-card blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                    INE FOPF5120215525CGGR
                </div>
            </div>
            <div className='calf'>
            </div>
            </div>
            <div className='washer-container'>
            <div className='icon'>
                <i className="fas fa-envelope  blue" ></i>
            </div>
            <div className='card'>
                 <div className="text">
                     francisvoy@gmail.com
                </div>
            </div>
            <div className='calf'>
            </div>
            </div>
        </Fragment>
    )
}

export default WasherPerfil