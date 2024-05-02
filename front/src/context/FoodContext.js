import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const FoodStore=createContext()

function FoodContext({children}) {
    const [foods,setFoods]=useState([])
    useEffect(()=>{axios.get("http://localhost:8000/api/foods").then((res)=>setFoods(res.data.data)).catch((e)=>console.log(e))},[])
  
  
  return (
    <FoodStore.Provider value={{foods,setFoods}}>
        {children}
    </FoodStore.Provider>
   
  )
}

export default FoodContext