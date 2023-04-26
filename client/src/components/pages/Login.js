import React, { useState } from 'react';
import Navbar from "../Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import '../../styles/Login_Signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ handleLogin }) => {
  const [formdata, setformdata] = useState({
    email: "",
    userType: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleonChange = (e) => {
    let val = e.target.value;
    let name = e.target.name;

    setformdata({ ...formdata, [name]: val })
  }

  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/login', formdata);
      alert(res.data.message);
      sessionStorage.setItem("id", res.data.userId)
      navigate('/dashboard')
    } catch (error) {
      const res = error.response;
      alert(res.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="image-container">
          <img src={require("../../assets/loginbg.png")} alt={"Doctor Logo"}></img>
        </div>
        <form className="login-form" onSubmit={handle} >
          <h2>LOGIN</h2><br></br>
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" name="email" value={formdata.email} onChange={handleonChange} placeholder='Enter E-mail' required></input>
          <label htmlFor='userType'>User Type</label>
          <select id='userType' name='userType' value={formdata.userType} onChange={handleonChange} required>
            <option value='' disabled selected >Select a user type</option>
            <option value='Recipient'>Recipient</option>
            <option value='Healthcare Professional'>Healthcare Professional</option>
            <option value='Healthcare Facility'>Healthcare Facility</option>
            <option value='Blood Donation Camp'>Blood Donation Camp</option>
          </select>
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input type={showPassword ? "text" : "password"} id="password" name="password" value={formdata.password} onChange={handleonChange} placeholder='Enter Password' required></input>
            <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="button-container">
            <button type='submit' >LOG IN</button><br></br>
            <Link to='/Signup'>Don't have an account? Register here.</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;
