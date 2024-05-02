const experss=require("express");
const { addOrder, getOrder, updateOrder, deleteorder } = require("../contorllers/ordercontroller");



const orderRouter=experss.Router();


orderRouter.post("/", addOrder);
orderRouter.get("/:id",getOrder);
orderRouter.put("/:id",updateOrder );
orderRouter.delete("/:id",deleteorder );
  


module.exports=orderRouter