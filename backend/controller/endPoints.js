let createUserModel = require("../models/createUser");
let bcrypt = require("bcryptjs");
let foodModel=require('../models/foodItems');
let foodcat=require('../models/foodCat');
let jwt = require("jsonwebtoken");
let mongoose=require('mongoose')

// create User
exports.createUser = async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  let secPassword = await bcrypt.hash(req.body.password, salt);
  let user = new createUserModel(req.body);
  user.password = secPassword;
  await user.save();
  res.send(user);
};

exports.loginUser = async (req, res) => {
  let user = await createUserModel.findOne({ email: req.body.email });
  console.log(user);
  let matchedPassword = await bcrypt.compare(req.body.password, user.password);
  if (matchedPassword) {
    let token = jwt.sign({ user }, "Hasnain");
    res.json({ user, token: token });
  } else {
    console.log("not");
  }
};

exports.foodDetails=async(req,res)=>{
  let food_items=await foodModel.find({});
  let food_category=await foodcat.find({});
  res.send([food_items,food_category]);
}

