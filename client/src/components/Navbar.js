import {FaBars, FaTimes} from "react-icons/fa"
function Navbar(){
    return (
        <header>
            <h3>HealthPlus</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Contact Us</a>
                <a href="/#">Privacy Policies</a>
                <a href="/#">Login</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;