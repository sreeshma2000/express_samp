const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("THIS IS HOME PAGE");
    console.log(req.body);
})

module.exports=router;