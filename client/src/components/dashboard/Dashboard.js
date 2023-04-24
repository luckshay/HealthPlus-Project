import React, { useEffect, useState } from 'react';
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
import Sidebar from './Sidebar';
import { CgProfile } from "react-icons/cg";

import RecipientHome from './RecipientDash/RecipientHome';
import RecipientAppointments from './RecipientDash/RecipientAppointments';
import RecipientCamps from './RecipientDash/RecipientCamps'
import RecipientProfile from './RecipientDash/RecipientProfile';

import ProfessionalHome from './ProfessionalDash/ProfessionalHome'
import ProfessionalAppointment from './ProfessionalDash/ProfessionalAppointment'
import ProfessionalProfile from './ProfessionalDash/ProfessionalProfile';

import BloodCampHome from './BloodCampDash/BloodCampHome';
import BloodCampProfile from './BloodCampDash/BloodCampProfile';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const [userType, setUserType] = useState("")
  const [userName, setUserName] = useState("")

  const getUserData = async () => {
    try {
      const id = sessionStorage.getItem("id");
      const res = await axios.post('/api/auth/getUserData', { userId: id });
      setUserType(res.data.userData.userType)
      setUserName(res.data.userData.userName)

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, [])


  return (
    <>
      <div className='hpmain'>
        <div className='hplayout'>
          <div className='hpsidebar'>
            {userType === "Recipient" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick} />}
            {userType === "Healthcare Professional" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick} />}
            {/* {userType === "Healthcare Facility" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick}/>} */}
            {userType === "Blood Donation Camp" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick} />}
          </div>
          <div className='hpmainbody'>
            <div className="hpheader">
              <div className="hpheader-content">
                {userType === "Recipient" && <Link onClick={() => setSelectedMenu('Profile Details')}>Hi, {userName}</Link>}
                {userType === "Healthcare Professional" && <Link onClick={() => setSelectedMenu('Profile Details')}>Welcome, Dr.{userName}</Link>}
                {userType === "Blood Donation Camp" && <Link onClick={() => setSelectedMenu('Profile Details')}>Welcome, {userName}</Link>}
                <CgProfile size="2rem" color='white' />
              </div>
            </div>
            <div className='hpcontent'>
              {userType === "Recipient" && selectedMenu === "Home" && <RecipientHome />}
              {userType === "Recipient" && selectedMenu === "Appointments" && <RecipientAppointments />}
              {userType === "Recipient" && selectedMenu === "Blood Donation Camps" && <RecipientCamps />}
              {userType === "Recipient" && selectedMenu === "Profile Details" && <RecipientProfile />}

              {userType === "Healthcare Professional" && selectedMenu === "Home" && <ProfessionalHome />}
              {userType === "Healthcare Professional" && selectedMenu === "Appointments" && <ProfessionalAppointment />}
              {userType === "Healthcare Professional" && selectedMenu === "Profile Details" && <ProfessionalProfile />}

              {userType === "Blood Donation Camp" && selectedMenu === "Home" && <BloodCampHome />}
              {userType === "Blood Donation Camp" && selectedMenu === "Profile Details" && <BloodCampProfile />}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard
