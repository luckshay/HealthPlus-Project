import React from "react";
import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Home from "../pages/Home";
import Aboutpage from "../pages/Aboutpage";
import Contactpage from "../pages/Contactpage";
import Privacypage from "../pages/Privacypage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Footer from "./Footer";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<Aboutpage/>}/>
        <Route exact path='/Contact' element={<Contactpage/>}/>
        <Route exact path='/Privacy' element={<Privacypage/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </Router>
     
    </>
  );
}

export default App;
