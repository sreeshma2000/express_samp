const express=require("express");
const app=express();
const AuthRoute=require("./routes/home");
const LoginRoute=require("./routes/login");
const RegisterRoute=require("./routes/reg");

app.use(express.json());
app.use("/",AuthRoute);
app.use("/home",LoginRoute);
app.use("/home",RegisterRoute);

app.listen(7000,()=>{
    console.log("server listening at 7000");
})
