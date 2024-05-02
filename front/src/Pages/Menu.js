import React, { useEffect, useState } from 'react'
import Foodlist from '../Food/Foodlist'
//page Menu
function Menu({setMode}) {
      setMode(false) /* if it is false then the color of the writing is black */
      //----------------------------------------------------------------------------------------------------------
      const [showDiv, setShowDiv] = useState(false);  /* this is to show a blured div when scrolling down */
         useEffect(() => {
             // Function to handle scroll events
             const handleScroll = () => {
            // Show the div when scrolling down, hide it when scrolling up
             setShowDiv(window.scrollY > 0);//if the windiwscrollY is true then the show div turn to be true
          };
          // Add scroll event listener when component mounts
          window.addEventListener('scroll', handleScroll);//if scrolled the function handlescroll turn on
          // Remove scroll event listener when component unmounts
          return () => {
           window.removeEventListener('scroll', handleScroll); };
         }, []);
         //----------------------------------------------------------------------------------------------------------
  return (
   
    <div>
      <div className={`blurred-div ${showDiv ? 'visible' : ''}`}></div> {/*base on the value of showdiv if true then this div will be visible  */}
      <hr style={{width:"1400px" , height:"6px" , backgroundColor:"orange" , border:"none" }}/> {/*an orange line to seperate the navbar from the menu */}
      <Foodlist/>
    </div>  
  )
}
export default Menu