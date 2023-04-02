import React from 'react';
import { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <header>
      <h2>HealthPlus</h2>
      <nav ref={navRef} className={showNav ? 'nav-active' : ''}>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <Link to="/about" onClick={closeNav}>
          About Us
        </Link>
        <Link to="/contact" onClick={closeNav}>
          Contact Us
        </Link>
        <Link to="/policies" onClick={closeNav}>
          Policies
        </Link>
        <Link to="/login" onClick={closeNav}>
          Login/SignUp
        </Link>
        <button className="nav-btn nav-close-btn" onClick={closeNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
