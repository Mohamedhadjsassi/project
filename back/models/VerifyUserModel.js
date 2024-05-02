const mongoose=require('mongoose');

const verifySchema=mongoose.Schema({
UserId:{type:mongoose.Types.ObjectId,required:true},
token:{type:String,required:true}
    
})

const VerifyModel=mongoose.model('Verify',verifySchema);


module.exports=VerifyModel
