
let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    data:{type:Date,default:Date.now},
})
let createUserModel=mongoose.model('users',userSchema);
module.exports=createUserModel;