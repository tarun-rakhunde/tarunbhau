const express = require('express');
const mongoose = require('mongoose');
const app=express()

function connect() {
    return mongoose.connect("mongodb+srv://tarun-rakhunde:tarun7559@cluster0.uuhiy.mongodb.net/Assignment")
}

const userSchema=new mongoose.Schema({
id:{type:Number,required:true},
movie_name:{type:String,required:true},
movie_genre:{type:String,required:true},
production_year:{type:Number,required:true},
budget:{type:Number,required:true},



});



  const User=mongoose.model("users",userSchema)  

   



app.get("/users",async (req,res)=>{
  try {
    const users=await User.find().lean().exec()
    return res.send(users)
  } catch (error) {
      return res.send(error.message)
  }
})
app.listen(2345,async()=>{
   try {
    await connect()
    console.log("port is done");    
   } catch (error) {
       return res.send(error.message);
   }
})