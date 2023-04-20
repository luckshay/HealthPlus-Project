import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../components/pages/Home";
import Aboutpage from "../components/pages/Aboutpage";
import Contactpage from "../components/pages/Contactpage";
import Policypage from "../components/pages/Policypage";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Footer from "../components/Footer";
import Dashboard from "./dashboard/Dashboard";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<Aboutpage />} />
          <Route exact path='/Contact' element={<Contactpage />} />
          <Route exact path='/Policies' element={<Policypage />} />
          <Route
            exact
            path="/Login"
            element={<Login />} 
          />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
