import React, { useEffect, useState } from 'react';
import axios from "../../config/axios";
import "../../styles/Dashboard.css";
import Sidebar from './Sidebar';


const Dashboard = () => {
  const [userType, setUserType] = useState("")

  const getUserData = async () => {
    try {
      let id = sessionStorage.getItem("id");
      const res = await axios.post('/api/auth/getUserData', { userId: id });
      setUserType(res.data.userData.userType)

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
      <div className='main'>
        <div className='layout'>
        {userType === "Recipient" && <Sidebar userType={userType} />}
        {userType === "Healthcare Professional" && <Sidebar userType={userType} />}
        {/* {userType === "Healthcare Facility" && <Sidebar userType={userType} />}
        {userType === "Blood Donation Camp" && <Sidebar userType={userType} />} */}

          <div className='content'>
            <div className='body'>Body</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
