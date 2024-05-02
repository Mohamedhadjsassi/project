import React, { useContext, useEffect, useState } from 'react'
import { AuthStore } from '../context/Authcontext'
import { FoodStore } from '../context/FoodContext'
import { OrderStore } from '../context/OrderContext'
import FoodO from '../Food/FoodsO'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Card({ setMode }) {
    setMode(false)
    const { auth } = useContext(AuthStore)
    const { foods } = useContext(FoodStore)
    const { order, setOrder } = useContext(OrderStore) //[{food:"kjdsqk",q:1}]
    const [userOrder, Setuserorder] = useState([])

    useEffect(() => {
        order.forEach((e) => {
            let a = foods.find(food => e.food == food._id)
            Setuserorder((prev) => [...prev, { food: a, quantity: e.quantity }])
        });
    }, [])
    const navigate = useNavigate()
    const hundleSubmit = (e) => {
        toast.promise(axios.post(`http://localhost:8000/api/order`, { foods: order, user_Id: auth.user }), { pending: "loading", success: "success", error: 'error' })

    }
    //   const [foodcard,setfoodcard]=useState([])
    //   foods.forEach((e)=>{
    //     userOrder.forEach((e1)=>{
    //         if (e._id==e1.food){
    //             setfoodcard(...e)
    //         }
    //     })
    //   });

    //   console.log(foodcard)

    return (
        <div>
            <h1>You already ordered :</h1>
            {userOrder.map((food) => {
                return <FoodO quantity={food.quantity} title={food.food.name} price={food.food.price} image={food.food.image} />
            }
            )}


            <button onClick={hundleSubmit}>checkOut</button>

        </div>

    )
}

export default Card