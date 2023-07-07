import React from 'react'
import styled from "styled-components"
import Pic from '../assets/icon1.jpeg'


const Container=styled.div`
    margin:auto;
    background-image:linear-gradient(to right,#ff5722,#ff9800);
    color:black;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
.container2{
    width: 600px;
    padding-left: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    border-left: 50px;
}
.heading{
    font-size: 25px;
    text-align: center;
    padding: 0 0 20px 0;
}
.register-form{
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
    line-height: 40px;
    padding: 20px;
    
}
.button-secondary {
    background-color: orange;
    text-align: center;
    color:white;
    border-radius: 100px;
    width: 100px;
    padding: 10px;
    margin-top: 20px;
    float:right;
    border: none;
    
}
input{
    width: 95%;
}
.container1{
    width: 500px;
    color: white;
    font-size: 25px;
    font-family: sans-serif;
    text-align: center;
    padding: 30px;
}
.div1{
    font-size: 20px;
    text-align: center;
    border: 0px;
    padding: 30px;
}
.button-primary{
    border-radius: 100px;
    border: none;
    width: 120px;
    background-color: white;
    font-weight: 600;
    color: black;
    margin-top: 20px;
    padding: 10px;
    text-align:center ;
}
.container1 img{
    margin-top:60px;
    margin-bottom:18px;
    width:80px;
}
`;

export const Register = () => {
    return(
        <Container>
         <div class="container1">
        <form action="" method="get">
            <img src={Pic} alt=''/>
             <div class="text">Join Us </div>
            <div class="div1"> <p>Subscribe Easy Youtube Channel to <br/>watch more videos</p>
            </div>
            <input type="submit" class="button-primary" value="About us"/>
        </form>
    </div>
<form action="" method="get">
    <div class="container2">
        <div class="heading"><h3>Register Here</h3></div>
            <div class="register-form">
                    <label for="Name"><b>Name</b></label>
                    <input type="text" name=""id="Name" class="form-group" placeholder="name" pattern="[A-Za-z\s]{2,}" title="name can only be a alphabet" required />
                    <label for="username"><b>Username</b></label>
                    <input type="text" name="" id="username" class="card-box" placeholder="username" required />
                     <label for="phone number"><b>Phone number</b></label>
                     <input type="tel" name="" id="phone number" class="card-box" placeholder="phone no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                     title="enter 10 digit phone number" required />
                    <label for="email"><b>Email</b></label>
                    <input type="email" name="" id="email" placeholder="email" class="card-box" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" 
                    title="enter valid email format" required />
                    <label for="Pswd"><b>Password</b></label>
                    <input type="password" name="" id="Pswd" placeholder="password" class="card-box"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                    <input type="submit"  value="Register" class="button-secondary" />
            </div>
        </div>
        </form>
        </Container>
    )
}
export default Register