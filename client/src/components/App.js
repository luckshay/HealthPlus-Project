import React, {useState} from "react";
import Navbar from "../components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

import Home from "../components/pages/Home";
import Aboutpage from "../components/pages/Aboutpage";
import Contactpage from "../components/pages/Contactpage";
import Policypage from "../components/pages/Policypage";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Footer from "../components/Footer";
import RecipientDash from "./dashboard/recipientDash";
import ProDash from "./dashboard/proDash";
import FacilityDash from "./dashboard/facilityDash";
import CampDash from "./dashboard/campDash";


function App() {
  const [userType, setUserType] = useState('');

  const handleLogin = (userType) => {
    setUserType(userType);
  }

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<Aboutpage/>}/>
        <Route exact path='/Contact' element={<Contactpage/>}/>
        <Route exact path='/Policies' element={<Policypage/>}/>
        <Route
            exact
            path="/Login"
            element={<Login handleLogin={handleLogin} />}
            />
        <Route exact path='/Signup' element={<Signup/>}/>
        {userType === 'Recipient' && <Route exact path="/dashboard" element={<RecipientDash />} />}
        {userType === 'Healthcare Professional' && <Route exact path="/dashboard" element={<ProDash />} />}
        {userType === 'Healthcare Facility' && <Route exact path="/dashboard" element={<FacilityDash />} />}
        {userType === 'Blood Donation Camp' && <Route exact path="/dashboard" element={<CampDash />} />}    
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
