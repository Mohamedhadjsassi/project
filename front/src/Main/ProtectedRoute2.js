import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthStore } from '../context/Authcontext'

function ProtectedRoute2() {
    const {auth}=useContext(AuthStore)

  return (
    
    auth?<Outlet/>:<Navigate to={"/login"}/>
  
  )
} 

export default ProtectedRoute2