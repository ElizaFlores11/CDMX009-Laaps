import React from 'react'
import logo1st from '../../assets/logo1st.png'
import logo2nd from '../../assets/logo2nd.png'
const Logo = ({small= false, big= false, medium=false }) =>{
    let src = logo1st
    let alt = logo1st
    let style = {<
        width: '80%',
        height: '80%'
    }
    

    if(big){
        src = logo1st
        alt = logo1st
    } else if (small){
        src = logo2nd
        alt = logo2nd
    } else if (medium){
        style = {
            width: '25%',
            height: '25%'
        }
        alt = 'medium'
    }
    return(
        <img src={src} alt={alt} style={style}></img>
    )
}

export default Logo