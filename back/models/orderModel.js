const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    foods:[{food:{type:mongoose.Schema.Types.ObjectId,ref:"food"},quantity:Number,_id:false}],
    user_Id:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    status:{type:String,enum:['pending','done',"canceled"],default:'pending'},

},{timestamps:true})

const orderModel=mongoose.model('order',orderSchema);

module.exports=orderModel

