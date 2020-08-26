import React, {Fragment} from 'react'; 
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'; 
import DatosAdmin from '../DatosAdmin/DatosAdmin'; 
import ReportDay from '../ReportDay/ReportDay'; 
const Admin = () =>{

    return (
        <Fragment>
            <HeaderAdmin />
            <DatosAdmin />
            <ReportDay />
        </Fragment>
    )
}
export default Admin; 
