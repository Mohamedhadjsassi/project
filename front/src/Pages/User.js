import React, { useContext, useEffect, useState } from 'react'
import { OrderStore } from '../context/OrderContext';
import { FoodStore } from '../context/FoodContext';
import { AuthStore } from '../context/Authcontext';
import axios from 'axios';
import FoodO from '../Food/FoodsO';

function User({setMode}) {
    setMode(false) //if it is false then the color will be black
    //---------------------------------------------------------------------------------------
    //this function is to show a blured div if scrolled down
     const [showDiv, setShowDiv] = useState(false);
           useEffect(() => {
                // Function to handle scroll events
                const handleScroll = () => {
               // Show the div when scrolling down, hide it when scrolling up
               setShowDiv(window.scrollY > 0);
                };
              // Add scroll event listener when component mounts
              window.addEventListener('scroll', handleScroll);
              // Remove scroll event listener when component unmounts
              return () => {
              window.removeEventListener('scroll', handleScroll);
               };
          }, []);
     //---------------------------------------------------------------------------------------
     //this function will open the div from left to right when rendering 
     const [loaded, setLoaded] = useState(false);
     useEffect(() => {
         // After the component is mounted, set the loaded state to true after a short delay
         const timer = setTimeout(() => {
          setLoaded(true);
          }, 1000); // Adjust the delay as needed
        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
       }, []);
      //---------------------------------------------------------------------------------------
      //this function will let the images to come from botton to their position
      const [showImage, setShowImage] = useState(false);

      useEffect(() => {
          setShowImage(true);
      }, []);


//---------------------------------------------------------------------------------------------------------------------
    const { auth } = useContext(AuthStore)
;
    const [order1,setOrdering]=useState([]) 
    useEffect(() => { 
              axios.get(`http://localhost:8000/api/order/${auth.user}`)
             
               .then((res) => setOrdering(res.data))
                .catch((error) => console.log(error))
             }, [auth.user]) 


console.log(order1,"orders");

  return (
    <div> 
      <div className={`blurred-div ${showDiv ? 'visible' : ''}`}></div> {/*when scrolling it became blured */}
      <div style={{height:"600px" , display:'flex' , gap:"20px" }}> {/*four pillars of image and image oppned */}
            {/*first image */}
             <div className={`picture-user1 ${showImage ? 'slide-up' : ''}`} style={{backgroundImage: "url('https://getwallpapers.com/wallpaper/full/2/7/b/1112751-cafe-wallpaper-1920x1200-for-mac.jpg')",
                   backgroundSize: "cover", width: "60px", height: "500px", borderRadius:"200px", backgroundPosition:"center" , marginLeft:"80px" , marginTop:"75px"}}> </div>
            {/*second image */}
             <div className={`picture-user2 ${showImage ? 'slide-up' : ''}`} style={{backgroundImage: "url('https://readyme.app/wp-content/uploads/2023/02/Quick_service_restaurant.jpg')",
                  backgroundSize: "cover", width: "60px", height: "500px", borderRadius:"200px", backgroundPosition:"center"  , marginTop:"55px"}}> </div>
            {/*third image */}
             <div className={`picture-user3 ${showImage ? 'slide-up' : ''}`} style={{backgroundImage: "url('https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg')",
                   backgroundSize: "cover", width: "60px", height: "500px", borderRadius:"200px", backgroundPosition:"center"  , marginTop:"35px"}}> </div>
            {/*fourth image */}
            <div className={`picture-user4 ${showImage ? 'slide-up' : ''}`} style={{backgroundImage: "url('https://images.adsttc.com/media/images/554b/ee14/e58e/ce42/3b00/01a8/large_jpg/portada_11_Gran_Fierro_BoysPlayNice.jpg?1431039477')",
                  backgroundSize: "cover", width: "60px", height: "500px", borderRadius:"200px", backgroundPosition:"center"  , marginTop:"15px"}}> </div>
    
            {/*this div will be oppned from left to right when rendering */}
             <div className={`image-container ${loaded ? 'loaded' : ''}`} style={{backgroundImage: "linear-gradient(to left, white 15%, transparent 80%),url('https://wallpapercave.com/wp/wp4441393.jpg')",
                   marginLeft:"5px" , marginTop:"5px"}}> 
                    {/*this div will collect info on customer */}
                  <form className='coordonée'>
                    <label> Name:  <input type="text"   /></label>
                    <label> Birthday: <input type="date"  /></label>
                    <label> Adress: <input type="text"  /></label>
                    <label> Favorite food: <input type="text"  /></label>
                    <label> password: <input type="password"  /></label>
                    
                    <button style={{borderRadius:"15px" , backgroundColor:"#edbe55" , width:"150px" , marginTop:"50px" , marginLeft:"25px"}} type="submit">Submit</button>
                  </form> 

              </div>
    </div>
    <hr style={{width:"1400px" , height:"6px" , backgroundColor:"orange" , border:"none" , marginInlineStart:"40px" }}/> {/*an orange line to seperate the navbar from the menu */}
     <h1>Your Last order</h1>
      {order1.map((e)=><div> <br/> {e.foods.map(ele=>{ return <FoodO  quantity={ele.quantity} title={ele.food.name} price={ele.food.price} image={ele.food.image}/>})}</div>)}
 
    </div>
  )
}
export default User;