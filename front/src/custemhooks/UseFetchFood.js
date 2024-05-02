import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthStore } from "../context/Authcontext"


function UseFetchFood(id) {
    const {auth}=useContext(AuthStore)
    const [food,setFood]=useState({})
    useEffect(()=>{axios.get("http://localhost:8000/api/foods/"+id,{headers:{Authorization:`Bearer ${auth.token}`}}).then((res)=>setFood(res.data)).catch((e)=>console.log(e))},[auth])
  
  return (
    food
  )
}

export default UseFetchFood