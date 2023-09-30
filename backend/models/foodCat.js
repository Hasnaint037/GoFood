let mongoose=require('mongoose');
let sc=new mongoose.Schema({});
let mo=mongoose.model('food_cats',sc);
module.exports=mo;