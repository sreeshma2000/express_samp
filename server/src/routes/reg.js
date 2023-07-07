const express=require("express");
const routerRegister=express.Router();

routerRegister.post("/register",(req,res)=>{
    res.send("THIS IS REGISTER PAGE");
    console.log(req.body);
})

module.exports=routerRegister;