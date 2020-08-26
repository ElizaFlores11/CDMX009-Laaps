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
            <div className='washer-container'>
            <div className='icon'>
            <i class="fas fa-user fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Abigail Sanches</div>
            </div>
            <div className='calf'>
            <i className="fas fa-star mas"></i>
            MÁS
            <i class="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className='washer-container'>
            <div className='icon'>
            <i class="fas fa-user fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Karen Flores</div>
            </div>
            <div className='calf'>
            <i className="fas fa-star mas"></i>
            MÁS
            <i class="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className='washer-container'>
            <div className='icon'>
            <i class="fas fa-user fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Mariel </div>
            </div>
            <div className='calf'>
            <i className="fas fa-star mas"></i>
            MÁS
            <i class="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className='washer-container'>
            <div className='icon'>
            <i class="fas fa-user fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Elizabeth Flores</div>
            </div>
            <div className='calf'>
            <i className="fas fa-star mas"></i>
            MÁS
            <i class="fas fa-chevron-right"></i>
            </div>
            </div>
        
        </Fragment>
    )
}

export default WasherReport
