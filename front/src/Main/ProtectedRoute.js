import React, { useContext } from 'react'
import { AuthStore } from './context/Authcontext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {token}=useContext(AuthStore)
if(token!=null)
{return children}
else{
    return<Navigate to="/register"/>
}
}

export default ProtectedRoute