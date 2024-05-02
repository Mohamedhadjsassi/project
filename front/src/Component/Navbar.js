import React, { useContext } from 'react'
import logo from '../Photos/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { OrderStore } from '../context/OrderContext'

//navbar elements
function Navbar({ mode }) {
  const {order}=useContext(OrderStore)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '300px', marginTop: '20px' , position:"sticky" , top:"20px" , zIndex:"2000"}}>
      
      <div className='logoo'> {/*logo image with name */}
        <Link to='/Home'> <img className='logo' src={logo} alt="Logo" /> </Link> {/*logo and when clicked it take you to Home */}
        <h1 className='logo-home' style={{ color: "#edbe55", fontSize: "40px" }}>Yummy</h1>
      </div>
      {/*the select menu button */}
      <div style={{ color: mode ? "white" : "black", width: "100px", fontSize: "18px", cursor: "pointer" }}>{/*base on mode it will be white in home*/}
        <Link to='/Menu' style={{ color: mode ? "white" : "black", textDecoration: "none", fontFamily: "calibri" }}>{/*when clicked it take you to menu page */}
          <div style={{ width: "350px", display: "flex", alignItems: "center", justifyContent: "center" , gap:"200px" }}>
            <h3 className='TextMenu'>Select.Menu</h3>
            {/*the moving dots */}
            <div class="container">
              <div class="dot1"></div>
              <div class="dot2" style={{backgroundColor:mode?"white" : "black"}}></div> {/*the white dot it will be black based on mode */}
              <div class="dot3"></div>
              <div class="dot4"></div>
            </div>
          </div>
        </Link>
        <hr style={{ width: "350px", marginTop: "2px" }} />
      </div>
       {/*the user logo and name  */}
      <div style={{ display: "flex", gap: "10px", color: "white", alignItems: "center", justifyContent: "center", cursor: "pointer", marginLeft: "300px" }}>
        {order.length>0&& <Link to={"/card"}> card</Link>}
       {/*when clikced on it it take you to user page */}
      <Link to='/User' style={{ color: mode ? "white" : "black", textDecoration: "none", fontFamily: "calibri" }}> <FontAwesomeIcon icon={faUser} style={{color:mode?"white" : "black"}} /> 
        <div style={{color:mode?"white" : "black"}}>Dear Customer</div></Link>
      </div>
    </div>
  );
}
export default Navbar;