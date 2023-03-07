import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import '../styles/Login_Signup.css'
const Signup = (props) => {
    const Navigate=useNavigate();
    const [formdata,setformdata]=useState({
        Username:"",
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
            Username:"",
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
        <img src={require("../assets/loginbg.png")}></img>
      </div>
    <form class="login-form" onSubmit={onSubmit}>
    <h2>SIGNUP</h2>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" value={formdata.Username} onChange={handleonChange}>
    </input>
    <label for="email">E-mail Address</label>
    <input type="email" id="email" name="Email" value={formdata.Email}onChange={handleonChange}></input>
    <label for="password">Password</label>
    <input type="password" id="passsword" name="Password" value={formdata.Password}onChange={handleonChange}></input>
    <label for="confirm password">Confirm Password</label>
    <input type="password" id="confirmpassword" name="ConfirmPassword" value={formdata.ConfirmPassword}onChange={handleonChange}></input>
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
