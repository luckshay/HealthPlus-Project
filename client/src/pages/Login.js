import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import '../styles/Login_Signup.css'
const Login = () => {
  const Navigate = useNavigate()
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
  
    const handle=async (e)=>{
        e.preventDefault();
        try {
          const res = await axios.post('/api/login', formdata);
          alert(res.data.message);
          Navigate('/Profile')
        } catch (error) {
          const res = error.response;
          alert(res.data.message);
        }

        }
  return (
    <>
    <div className="container">
      <div className="image-container">
        <img src={require("../assets/loginbg.png")} alt={"Doctor Logo"}></img>
      </div>
    <form className="login-form" onSubmit={handle} >
    <h2>LOGIN</h2><br></br>
    <label htmlFor="email">E-mail address</label>
    <input type="email" id="email" name="Email" value={formdata.Email} onChange={handleonChange} placeholder='Enter your E-mail'></input>
    <label htmlFor="password">Password</label>
    <input type="password" id="password"  name="Password" value={formdata.Password} onChange={handleonChange} placeholder='Enter your Password' ></input>
    <div className="button-container">
    <button type='submit' >LOG IN</button><br></br>
    <Link to='/Signup'>Don't have an account? Register here.</Link>
    </div>
    </form>
    </div>
    </>
  )
}

export default Login