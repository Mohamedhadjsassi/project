import React, { useContext } from 'react'
import { FoodStore } from '../context/FoodContext'
import Food from './Food';
//this code is to extract the table of foods and map it one by one and render it in the form of <Food/>
function Foodlist() {
const {foods}=useContext(FoodStore)
 
console.log(foods);
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:'20px',justifyContent:'center',alignItems:'center'}} >
      {foods.map((e)=>(
        <Food title={e.name} price={e.price} recipe={e.recipe} category={e.category} image={e.image} id={e._id}/>
      ))}
    </div>   
  )
}
export default Foodlist