const express=require("express");
const routerLogin=express.Router();

routerLogin.post("/login",(req,res)=>{
    res.send("THIS IS LOGIN PAGE");
    console.log(req.body);
})

module.exports=routerLogin;