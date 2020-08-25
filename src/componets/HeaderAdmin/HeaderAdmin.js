import React, {Fragment} from 'react'; 
import {Container, Col, Row } from 'react-bootstrap'
import LogoAdmin from '../LogoAdmin/LogoAdmin'; 
import MenuAdmin from '../MenuAdmin/MenuAdmin';  
const HeaderAdmin = () =>{
    return(
        <Fragment>
            <Container  fluid="md" className='headeradmin'>
                <Row>
                    <Col sm={4}>
                        <div className='login'>
                            <LogoAdmin/>
                        </div>
                        </Col>
                    <Col sm={8}>
                        <MenuAdmin />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default HeaderAdmin; 