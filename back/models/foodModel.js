const mongoose=require('mongoose');

const foodSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:String,
    image:{type:String},
    category:{type:String,required:true},
    recip:String


}
,
{versionKey:false})

const FoodModel=mongoose.model('food',foodSchema);


module.exports=FoodModel