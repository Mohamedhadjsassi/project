import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import UseFetchFood from '../custemhooks/UseFetchFood';
import { OrderStore } from '../context/OrderContext';
import axios from 'axios';
import { AuthStore } from '../context/Authcontext';
import { toast } from 'react-toastify';

function OneFood() {
  const {order,setOrder}=useContext(OrderStore)
 const {auth}=useContext(AuthStore)
  const [quantity,setquantity]=useState(1)
    const params=useParams()

const food=UseFetchFood(params.id)

const handleSubmit = (e) => {
  e.preventDefault();

  //const token = localStorage.getItem("token"); // Retrieve the token from local storage or wherever it's stored

  setOrder(prev=>[...prev,{food:food._id , quantity:quantity}])
  toast.success('added to your card')
  // axios.post("://localhost:8000/api/order/",{foods:order , user_Id:auth.user}).then((res)=>console.log("it's send")).catch((e)=>console.log(e))
   
};


const adding=()=>{setquantity(quantity+1)}

const susbstructing=()=>{if (quantity > 1) {
  setquantity(quantity - 1);
}}

  return (
    <div>
        {food &&  <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , gap:'10px'}}>
                          <h1 style={{color:"#edbe55" }}>{food.name}</h1>
                          <div style={{ height:"1000px" , width:"1000px", display:"flex" , gap:"50px"}}>
                                
                                <img src={food.image} style={{height:"500px" , width:"auto" , borderRadius:"10px" }}/>
                                <div>

                                 <fieldset style={{ border: '1px solid #edbe55',  height:"300px" , width:"500px" ,display:"flex" , flexDirection:"column"  , justifyContent:"center", alignItems:"center"}}>
                                    
                                         <h6>this is  <span style={{color:"#edbe55" }}>{food.category}</span>   food</h6> 
                                        <h6 style={{ fontSize: '15px', fontWeight: 'normal' ,  lineHeight: '3.5', whiteSpace: 'balance'}}>{food.recipe}</h6>
                                 </fieldset>
                                 <h5 style={{marginTop:"20px"}}>how much do you want to order ?</h5>
                                 <div style={{display:"flex" , justifyContent:"center" ,gap:"30px", alignItems:"center",marginTop:"20px"}}> <button style={{  borderRadius:"15px"}} onClick={susbstructing}>Less</button> <span>{quantity}</span> <button style={{ borderRadius:"15px"}} onClick={adding}>More</button>  </div>
                                 <button style={{marginTop:"20px" , borderRadius:"15px"}}onClick={handleSubmit}>Add to your meal</button>
                             </div>
                          </div>
                      </div> }
    </div>
  )
}

export default OneFood


