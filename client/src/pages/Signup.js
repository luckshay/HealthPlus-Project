import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
// import { Navigate } from 'react-router-dom'
import '../styles/Login_Signup.css'
const Signup = () => {
    const Navigate=useNavigate();

    const [formdata,setformdata]=useState({
        Email:"",
        Password:"",
        ConfirmPassword:"",
    })
    const handleonChange=(e)=>{
        let val=e.target.value;
        let name=e.target.name;

        setformdata({...formdata,[name]:val})
        console.log(formdata)
    }
    const  onSubmit=(e)=>{
        e.preventDefault();
        setformdata({
            Email:"",
            Password:"",
            ConfirmPassword:"",
        })
        Navigate('/login')
    }
  return (
    <>
    <div class="container">
      <div class="image-container">
        <img src={require("../assets/loginbg.png")}alt={"Doctor Logo"}></img>
      </div>
    <form class="login-form" onSubmit={onSubmit}>
    <h2>SIGNUP</h2><br></br>
    <label for="email">E-mail Address</label>
    <input type="email" id="email" name="Email" value={formdata.Email}onChange={handleonChange} placeholder='Enter your E-mail'></input>
    <label for="password">Password</label>
    <input type="password" id="passsword" name="Password" value={formdata.Password}onChange={handleonChange} placeholder='Enter your Password'></input>
    <label for="confirm password">Confirm Password</label>
    <input type="password" id="confirmpassword" name="ConfirmPassword" value={formdata.ConfirmPassword}onChange={handleonChange}placeholder='Enter your Password Again'></input>
    <div class="button-container">
    <button type='submit' >Submit</button>
    </div>
    <Link to='/login'>Already have an account?Login here.
    </Link>
    </form>
    </div>
    </>
  )
}
export default Signup
