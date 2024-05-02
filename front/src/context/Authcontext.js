import React, { createContext, useState } from 'react'
export const AuthStore=createContext()


function Authcontext({children}) {
    const [auth,setAuth]=useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null)
    


  return (
    <AuthStore.Provider value={{auth,setAuth}}>
         {children}
    </AuthStore.Provider>
   

  )

}

export default Authcontext