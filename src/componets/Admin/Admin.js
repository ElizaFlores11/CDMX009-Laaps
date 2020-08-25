import React, {Fragment} from 'react'; 
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
import DatosAdmin from '../DatosAdmin/DatosAdmin'; 

const Admin = () =>{

    return (
        <Fragment>
            <HeaderAdmin />
            <br/><br/>
            <DatosAdmin />
        </Fragment>
    )
}
export default Admin; 
