// import React, { useContext, useEffect, useState } from 'react'
// import { OrderStore } from '../context/OrderContext'
// import Food from '../Food/Food'
// import axios from 'axios'
// import FoodO from '../Food/FoodsO'
// import { AuthStore } from '../context/Authcontext'

// function Orderinglist({setMode}) {
//   const [order1,setOrdering]=useState([])
//   const {auth}=useContext(AuthStore)
  
// console.log(auth.user,"auth");
//     setMode(false)

//     useEffect(() => { 
//       axios.get(`http://localhost:8000/api/order/${auth.user}`)
//       //.then((res) => console.log(res.data))
//        .then((res) => setOrdering(res.data))
//         .catch((error) => console.log(error))
//     }, [auth.user]) 

//     const allFoods = order1.reduce((acc, order) => {
//       return acc.concat(order.foods);
//   }, []);
//   const [order2, setAllFoods] = useState([]);
//   useEffect(() => {
//     // Fetch food details for each order
//     const fetchFoodDetails = async () => {
//       const foods = [];
//       for (const order of allFoods) {
//         for (const food of order) {
//           try {
//             const res = await axios.get(`http://localhost:8000/api/foods/${food.food}`);
//             foods.push({ ...food, name: res.data.name , image: res.data.image , price : res.data.price , quantity: allFoods.quantity});
//           } catch (error) {
//             console.log(error);
//           }
//         }
//       }
//       setAllFoods(foods);
//     };

//     fetchFoodDetails();
//   }, [order1]);

//   console.log(allFoods)
//   return (
//     <div>
//        <h1>You already ordered :</h1>
//     <div style={{display:'flex',flexWrap:"wrap",gap:'20px',justifyContent:'center',alignItems:'center'}} >
//     {order2.map((food) => (
//           <FoodO   name={food.name} quantity={food.quantity} image={food.image} price={food.price} />
//         ))}  
      
//   </div>  
//   </div> 


 
//   )
// }

// export default Orderinglist