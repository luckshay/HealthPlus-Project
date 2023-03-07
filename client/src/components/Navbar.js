import {useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/main.css";
import {Link}from "react-router-dom";
function Navbar(){
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            {/* <img src={require("../../src/assets/logo/Health-Plus Logo 2.png")} width={75} height={75} alt=""></img> */}
            {/* client\src\assets\logo\Health-Plus Logo 2.png */}
            <h2>HealthPlus</h2>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/Privacy">Privacy Policies</Link>
                <Link to="/Login">Login</Link>
                <button className="nav-btn nav-close-btn"onClick={showNavbar}>
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