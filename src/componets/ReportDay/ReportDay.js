import React, {Fragment} from 'react'
import { Button } from 'react-bootstrap';
import './ReportDay.scss'; 

const  ReportDay= () =>{
   
    return(
        <Fragment>
        <div className='day-container'>
            <div className='icon'>
            <i class="fas fa-car fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Francisco Perez</div>
                    <div className="text">
                        <p>Servicio en la Roma <br/>
                        
                        Para Daniela Torees <br/>
                        Servicio 15/07/2020 12:15hrs</p>
                        <br/>
                    </div>
            </div>
            <div className='calf'>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            </div>
            </div>
            <br/>
            <div className='day-container'>
            <div className='icon'>
            <i class="fas fa-car fa-3x"></i>
            </div>
            <div className='card'>
                 <div className="titulo2">Francisco Perez</div>
                    <div className="text">
                        <p>Servicio en la Roma <br/>
                        
                        Para Daniela Torees <br/>
                        Servicio 15/07/2020 12:15hrs</p>
                        <br/>
                    </div>
            </div>
            <div className='calf'>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            <i className="fas fa-star green"></i>
            </div>
            </div>
            <Button className="btn"type="button" id='goPerfil' style={{backgroundColor: '#4FB690', borderColor:'#4FB690', borderRadius:'20px'}}>
                        VER PERFIL
                    </Button>
                    
            </Fragment>
    )
}

export default ReportDay
