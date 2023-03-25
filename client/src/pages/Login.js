import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from '../config/axios'
import '../styles/Login_Signup.css'
const Login = () => {
  const Navigate = useNavigate()
    const [formdata,setformdata]=useState({
        email:"",
        userType:"",
        password:"",

    })
    const handleonChange=(e)=>{
        let val=e.target.value;
        let name=e.target.name;
        console.log(formdata);

        setformdata({...formdata,[name]:val})
    }
  
    const handle = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post('/api/login', formdata);
        alert(res.data.message);
        Navigate('/Profile');
      } catch (error) {
        const res = error.response;
        alert(res.data.message);
      }
    };
    
  return (
    <>
    <div className="container">
      <div className="image-container">
        <img src={require("../assets/loginbg.png")} alt={"Doctor Logo"}></img>
      </div>
    <form className="login-form" onSubmit={handle} >
    <h2>LOGIN</h2><br></br>
    <label htmlFor="email">E-mail address</label>
    <input type="email" id="email" name="email" value={formdata.email} onChange={handleonChange} placeholder='Enter E-mail'></input>
    <label htmlFor='userType'>User Type</label>
          <select id='userType' name='userType' value={formdata.userType} onChange={handleonChange}>
            <option value='' disabled defaultValue>Select a user type</option>
            <option value='Recipient'>Recipient</option>
            <option value='Healthcare Professional'>Healthcare Professional</option>
            <option value='Healthcare Facility'>Healthcare Facility</option>
            <option value='Blood Donation Camp'>Blood Donation Camp</option>
          </select>
    <label htmlFor="password">Password</label>
    <input type="password" id="password"  name="password" value={formdata.password} onChange={handleonChange} placeholder='Enter Password' ></input>
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