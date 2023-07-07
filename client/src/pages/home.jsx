import React,{ useEffect, useState }from 'react'
import styled from "styled-components"
import reactLogo from '../assets/Spotify_logo.png'
import Image from '../assets/spotify_md.png'
import './login'

const  Container=styled.div`
   height: 99.8vh;
   margin-left: -10px;
   margin-top: -10px;
   margin-right: -7px;
   background:url(${Image});
   background-size: cover;
   background-repeat: no-repeat;
   .container1{
    height:99% ;
    width: 100%;
   }
.nav{
    background-color:rgba(25, 20, 20, 0.65);
    width: 100%;
    height: 100px;
}
.logo img{
    width: 100px;
    height: 40px;
    float: left;
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.nav label{
    color: white;
    font-size: 17px;
    line-height: 90px;
    padding: left 50px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}
.nav ul{
    float: right;
    margin-right: 20px;
}
.nav ul li{
    display: inline-block;
    line-height: 70px;
    margin: 0 5px;
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold; 
}
.nav ul a{
    color:white;
    text-decoration: none;
}
.new{
    margin-top: 200px;
    
}
.div1 p{
    font-family:Arial, Helvetica, sans-serif;
    color:  #fff;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
}
.div2 p{
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    font-size: 15px;
    text-align: center;
    margin-top: -10px;
}
.div3{
    color: white;
    margin-left: 650px;
}
.button-primary{
    border-radius: 100px;
    border: none;
    width: 200px;
    background-color: green;
    font-weight: 600;
    color:white;
    margin-top: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}  
@media (max-width: 768px) {
    /* Apply styles for screens with a maximum width of 768px */
    .container1{
        height: 100%;
        width: 10%;
        margin-right: 100px;
        background-repeat: no-repeat;
    }
    .nav {
      height: 120px;
    }

    .logo img {
      width: 80px;
      height: 30px;
      margin-top: 15px;
      margin-right: 5px;
      margin-bottom: 5px;
      margin-left: 8%;
    }

    .nav label {
      font-size: 14px;
      line-height: 30px;
      padding-left: 30px;
      margin-top: -100px;
    }

    .nav ul li {
      line-height: 5px;
      font-size: 14px;
      padding: 5px 10px;
      margin-top: 0px;
      display: flex;
      flex-direction: column;
    }

    .new {
      margin-top: 100px;
    }
    .line{
        display: none;
    }
    .div3{
        margin-left: 160px;
    }}`;

const home = () => {
    const[value,setValue]=useState(0);
    useEffect(() => {
        console.log(value);},[value])
  return (
    <Container>
        <container1>
    <div class="nav">
    <nav>
    <div class="logo">
        <img src={reactLogo} alt=''/>
    </div>
        <ul>
         <li><a>Premium</a></li>
         <li><a>Help</a></li>
         <li><a>Download</a></li>
         <li><div class="line"><a>|</a></div></li>
         <li><a>Sign Up</a></li>
         <li><a href='login'>Log In</a></li>
        </ul>
        </nav>
     </div>
     <div class="new">
        <div class="div1"><p>Music for everyone.</p></div>
        <div class="div2"><p>Millions of songs. No credit card needed.</p></div>
        <div class="div3"><h2>Count : {value}</h2></div>
        <button type="button" class="button-primary" onClick={()=>setValue(value+1)}>UPDATE</button>

    </div>
    </container1>
    </Container>
  )
}

export default home