import {useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/main.css";
function Navbar(){
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            {/* <img src={require("../../src/assets/logo/Health-Plus Logo 2.png")} width={75} height={75} alt=""></img> */}
            {/* client\src\assets\logo\Health-Plus Logo 2.png */}
            
            <h3>HealthPlus</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Contact Us</a>
                <a href="/#">Privacy Policies</a> 
                <a href="/#">Login</a>
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