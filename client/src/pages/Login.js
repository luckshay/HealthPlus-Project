import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Login.css'
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
    <form  onSubmit={onSubmit}>
    <div className="mb-2">
           <h3>LOGIN</h3>
        {/* Name:
     <input type="text" name="Username" value={formdata.Username} onChange={handleonChange} placeholder='enter your name'>
     </input><br></br> */}
       <div className="mb-3">
          <label>Email address</label>
     <input type="email"   className="form-control" name="Email" value={formdata.Email}onChange={handleonChange} placeholder='enter your email'></input><br></br>
    </div>
    <div className="mb-3">
          <label>Password</label>
     <input type="password"   className="form-control"  name="Password" value={formdata.Password}onChange={handleonChange} placeholder='enter your password' ></input><br></br>
    </div>
    {/* <Link to='/Signup'>Signup</Link> */}
    <div className="d-grid">
    <button type='submit' className="btn btn-primary">LOG IN</button>
    </div>
    <button className="link-btn"> <Link to='/Signup'>Don't have an account? Register here.</Link></button>
    </div>
    </form>
    </>
  )
}

export default Login