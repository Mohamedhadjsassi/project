import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer({mode}) {
  return (
    <div style={{display:"flex" , justifyContent:"space-around"}}>
        <div style={{color:mode?"white" : "black"}} >{/*based on type of mode it change the color */}
             Copyright © 2024 All Rights ReservedPrivacy policy | Terms and Conditions | Ymmy House Group Website | about us
         </div>
        {/*social media */} 
        <div style={{display:"flex" , gap:"10px" , color:"orange" , fontSize:"25px" , cursor:"pointer"}}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTiktok} />
            <Link to="/Admin" style={{color:"orange" , marginTop:"-8px"}} > <FontAwesomeIcon icon={faKey} /> </Link>
            <Link to="/Orderinglist" style={{color:"green" , marginTop:"-8px"}} > <FontAwesomeIcon icon={faKey} /> </Link>
        </div>
    </div>
  )
}
export default Footer