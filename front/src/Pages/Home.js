import React, { useEffect, useState } from 'react'

function Home({setMode}) {
    setMode(true) /* if it is true then the color of the writing is white */
    //------------------------------------------------------------------------------------------------------------------------------
    //background images of Home
    const [currentImageIndex, setCurrentImageIndex] = useState(0);/* state to change the background image everytime*/
    const images = [/* list of images to slide them in background*/
      "https://javahouseafrica.com/wp-content/uploads/2024/04/Breakfast-Quesadila-combo_1280x720.png",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/California-Burger_1280x720.png",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/Continental-Breakfast_1280x720.png",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/Creamy-Thai-Coconut-Chicken_1280x720.png",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Caramel-White-Chocolate-Frappe_Website-Splash-Screen-1280-x-720-1813x1020.jpg",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Caramel-White-Chocolate-Mocha_Website-Splash-Screen-1280-x-720-1813x1020.jpg",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Chocolate-Vanilla-Cake_Website-Splash-Screen-1280-x-720-1813x1020.jpg",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Coconut-Danish_Website-Splash-Screen-1280-x-720-1813x1020.jpg",
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Iced-Tea-with-Fresh-Juice_Website-Splash-Screen-1280-x-720-1813x1020.jpg" , 
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Masala-Tea_Website-Splash-Screen-1280-x-720-1-1813x1020.jpg" ,
      "https://javahouseafrica.com/wp-content/uploads/2024/04/JAVA-Pick-Me-Up-Smoothie_Website-Splash-Screen-1280-x-720-1813x1020.jpg", 
      "https://javahouseafrica.com/wp-content/uploads/2019/07/Master-Menu-759x600.png" 
    ];
  
    useEffect(() => {
      const interval = setInterval(() => { //every 10s the index of image change
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // when the previndex reach the images.length it return to zero , it faciltate the loop
      }, 10000);
      return () => clearInterval(interval);
    }, []);
    //------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="Apphome">
        <div className="home"
             style={{
               backgroundImage: `url(${images[currentImageIndex]})`,// as you know the index of image is variable , so the background will be one of the the table image each time 
               backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',
               transition: 'background-image 1s ease-in-out'
                }}>  
              
              <div  className='cover' > {/*this cover to make the picture of background darker */}
                    <div style={{height:"1px"}}></div>
                    
                  {/* <input type='text'placeholder='Email' style={{ backgroundColor:"transparent",border:"none" , width:"400px", color:"white" ,marginTop:"150px", marginLeft:"-500px" , zIndex:"1000000" }}/>
                 */}
              </div>
        </div>
    </div>
  );
}export default Home