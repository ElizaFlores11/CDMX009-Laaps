import React from 'react'
import logo1st from '../../assets/logo1st.png'
import logo2nd from '../../assets/logo2nd.png'
const Logo = ({small= false, big= false}) =>{
    let src = logo1st
    let alt = logo1st

    if(big){
        src = logo1st
        alt = logo1st
    } else if (small){
        src = logo2nd
        alt = logo2nd
    }
    return(
        <img src={src} alt={alt}></img>
    )
}

export default Logo