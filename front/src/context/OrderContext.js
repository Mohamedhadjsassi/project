import React, { createContext, useState } from 'react'
export const OrderStore=createContext()

function OrderContext({children}) {
    const[order,setOrder]=useState([])
    console.log(order);
  return (
  <OrderStore.Provider value={{order,setOrder}}>
    {children}
  </OrderStore.Provider>
  )
}

export default OrderContext