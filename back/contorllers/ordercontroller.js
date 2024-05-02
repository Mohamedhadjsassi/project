
const { populate } = require("dotenv");
const orderModel = require("../models/orderModel");
const asynchundler = require("../utils/asyncHundler");




  
    const addOrder= asynchundler ( async (req, res) => {
      const newOrder = await orderModel.create(req.body);
      res.json(newOrder);
    })

    const getOrder= asynchundler(async (req, res) => {
    
          const orders = await orderModel.find({ user_Id: req.params.id }).populate("user_Id").populate({path:"foods.food"});
        res.json(orders);
        } )

      const updateOrder= asynchundler(async (req, res) => {
      const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
         }); 
         res.json(order) 
     
       })

       const deleteorder= asynchundler(async (req, res) => {
        const order = await favoriteModel.findByIdAndDelete(req.params.id,  {
           new: true,
         }); 
         res.json(order) 
      
       })
  module.exports={addOrder,getOrder,updateOrder,deleteorder}