import React, { useEffect, useState } from 'react';
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
import Sidebar from './Sidebar';
import { CgProfile } from "react-icons/cg";
import RecipientHome from './RecipientDash/RecipientHome';
import RecipientAppointments from './RecipientDash/RecipientAppointments';
import RecipientProfile from './RecipientDash/RecipientProfile';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const [userType, setUserType] = useState("")
  const [userName, setUserName] = useState("")

  const getUserData = async () => {
    try {
      let id = sessionStorage.getItem("id");
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
            {userType === "Recipient" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick}/>}
            {userType === "Healthcare Professional" && <Sidebar userType={userType} setSelectedMenu={handleMenuClick}/>}
            {/* {userType === "Healthcare Facility" && <Sidebar userType={userType} />}
        {userType === "Blood Donation Camp" && <Sidebar userType={userType} />} */}
          </div>
          <div className='hpmainbody'>
            <div className="hpheader">
              <div className="hpheader-content">
                {userType==="Recipient" && <Link to="/profile">Hi, {userName}</Link>}
                {userType==="Healthcare Professional" && <Link to="/profile">Welcome, Dr.{userName}</Link>}
                <CgProfile size="2rem" color='white' />
              </div>
            </div>
            <div className='hpcontent'>
              {userType === "Recipient" && selectedMenu === "Home" && <RecipientHome />}
              {userType === "Recipient" && selectedMenu === "Appointments" && <RecipientAppointments />}
              {userType === "Recipient" && selectedMenu === "Profile Details" && <RecipientProfile />}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard
