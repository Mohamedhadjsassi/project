const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isVerify:{type:Boolean,default:false},
    role:{type:Boolean,default:false}
    
})

const UserModel=mongoose.model('User',userSchema);


module.exports=UserModel
