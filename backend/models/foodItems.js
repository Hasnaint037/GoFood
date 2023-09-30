let mongoose=require('mongoose');
let foodSchema=new mongoose.Schema({});
let foodModel=mongoose.model('food_items',foodSchema);
module.exports=foodModel;