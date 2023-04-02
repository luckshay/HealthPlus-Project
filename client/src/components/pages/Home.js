import React, { useState, useEffect } from 'react';
import axios from "../../config/axios";
import '../../styles/Home.css';
import image1 from '../../assets/logo/patientregistration.avif' 
import image2 from "../../assets/logo/Healthregistration.avif"
import image3 from "../../assets/logo/HealthCare Professional Registration.png"
import image4 from"../../assets/logo/blooddonation.png";
function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabContent = [
    {
      id: 1,
      title: 'Paitent Registration Number',
      image: image1,
      content: 'Tab 1 Content',
    },
    {
      id: 2,
      title: 'Health Facility Registration',
      image: image2,
      content: 'Tab 2 Content',
    },
    {
      id: 3,
      title: 'HealthCare Professional Registration ',
      image: image3,
      content: 'Tab 3 Content',
    },
    {
      id: 4,
      title: 'Blood Donation ',
      image: image4,
      content: 'Tab  Content',
    },
  ];

  const [userCount, setUserCount]= useState(null);
  const [professionalsCount, setProfessionalsCount]= useState(null);
  const [facilityCount, setFacilityCount]= useState(null);
  const [campCount, setCampCount]= useState(null);


  async function fetchUserCount() {
    const response = await axios.get("/api/analysis");
    setUserCount(response.data.countRecipient);
    setProfessionalsCount(response.data.countProfessionals);
    setFacilityCount(response.data.countFacilities);
    setCampCount(response.data.countCamps);
    
  }

  useEffect(() => {
    fetchUserCount();
    const interval = setInterval(fetchUserCount, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
    <div className="components">
      <div className="top-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <img src={tab.image} alt={tab.title} />
            <h3>{tab.title}</h3>
          </div>
        ))}
      </div>
      <div className="bottom-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`content ${activeTab === tab.id ? 'active' : ''}`}
          >
            <h2>{tab.content}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
    <div className='statistics'>
      <h1>HealthPlus Components Statistics</h1>
      <div className='stats-row'>
        <div className='RecipientsReg'>
          <img /*src={require("./")}*/alt={"RecipientsReg"}></img>
          <h3>{userCount}</h3>
          <p>HealthPlus Recipients Registered</p>
      </div>
      <div className='ProfessionalsReg'>
        <img /*src={require("./")}*/alt={"ProfessionalsReg"}></img>
        <h3>{professionalsCount}</h3>
        <p>HealthPlus Professionals Registered</p>
      </div>
      <div className='FacilityReg'>
        <img /*src={require("./")}*/alt={"FacilityReg"}></img>
        <h3>{facilityCount}</h3>
        <p>HealthPlus Facilities Registered</p>
      </div>
      <div className='CampsOrg'>
        <img /*src={require("./")}*/alt={"CampsOrg"}></img>
        <h3>{campCount}</h3>
        <p>HealthPlus Blood Donation Camps Registered</p>
      </div> 
    </div>  
  </div>
  </>
  );
}

export default Home;

