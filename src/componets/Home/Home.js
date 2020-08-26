import React from 'react'
import Maps from '../Maps/Maps'
import Header from '../Header/Header'
import { Button } from 'react-bootstrap';

import './Home.scss'

const Home= () =>{
    return(
        <div>
            <Header />
            <Maps />
            <Button>QUIERO LAVAR MI AUTO</Button>
            
        </div>
    )
}

export default Home