import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import '../styles/Login.css'
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
    <div  className="auth-form-container">
        <h1>SIGNUP!!!</h1>
         <form onSubmit={onSubmit}>
  Username:
  <input type="text" name="Username" value={formdata.Username} onChange={handleonChange}>
  </input><br></br>
  Email:
  <input type="email" name="Email" value={formdata.Email}onChange={handleonChange}></input><br></br>
  Password:
  <input type="password" name="Password" value={formdata.Password}onChange={handleonChange}></input><br></br>
  confirm password:
  <input type="password" name="ConfirmPassword" value={formdata.ConfirmPassword}onChange={handleonChange}></input><br></br>
  {/* <Link to='/login'>Login</Link> */}
  <button type='submit' >submit</button>
        </form>
        <button> <Link to='/login'>Already have an account?Login here.</Link></button>
        </div>
  )
}
export default Signup
