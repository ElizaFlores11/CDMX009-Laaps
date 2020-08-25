import React from 'react'
import logo1st from '../../assets/logo1st.png'
import logo2nd from '../../assets/logo2nd.png'
const Logo = ({small= false, big= false, medium=false }) =>{
    let src = logo1st
    let alt = logo1st
    let style = {
        width: '70%',
        height: '70%'
    }
    

    if(big){
        src = logo1st
        alt = logo1st
    } else if (small){
        src = logo2nd
        alt = logo2nd
    } else if (medium){
        style = {
            width: '30%',
            height: '30%'
        }
        alt = 'medium'
    }
    return(
        <img src={src} alt={alt} style={style}></img>
    )
}

export default Logo