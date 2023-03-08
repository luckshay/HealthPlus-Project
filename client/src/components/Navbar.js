import React from 'react';
import {useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/header.css";
import {Link}from "react-router-dom";
function Navbar(){
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            <h2>HealthPlus</h2>
            <nav ref={navRef} onClick={showNavbar}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/Privacy">Policies</Link>
                <Link to="/Login">Login/SignUp</Link>
                <button className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn"onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;