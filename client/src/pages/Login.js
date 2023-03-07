import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Login_Signup.css'
const Login = (props) => {
    const [formdata,setformdata]=useState({
        Username:"",
        Email:"",
        Password:"",

    })
    const handleonChange=(e)=>{
        let val=e.target.value;
        let name=e.target.name;
        setformdata({...formdata,[name]:val})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        setformdata({
            Username:"",
            Email:"",
            Password:"",
            ConfirmPassword:"",
        })
        alert('register successfull')
    }
  return (
    <>
    <div class="container">
      <div class="image-container">
        <img src={require("../assets/loginbg.png")}></img>
      </div>
    <form class="login-form" onSubmit={onSubmit} >
    <h2>LOGIN</h2>
    <label for="email">E-mail address</label>
    <input type="email" id="email" name="email" value={formdata.Email}onChange={handleonChange} placeholder='Enter your E-mail'></input>
    <label for="password">Password</label>
    <input type="password" id="password"  name="password" value={formdata.Password}onChange={handleonChange} placeholder='Enter your Password' ></input>
    <div class="button-container">
    <button type='submit' >LOG IN</button><br></br>
    <Link to='/Signup'>Don't have an account? Register here.</Link>
    </div>
    </form>
    </div>
    </>
  )
}

export default Login