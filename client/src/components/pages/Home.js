import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import "../../styles/Home.css";
import Navbar from "../Navbar";
import image1 from "../../assets/logo/patient-registration-logo-homepage.svg";
import image2 from "../../assets/logo/health-Facility-registration-logo-homepage.svg";
import image3 from "../../assets/logo/health-care-professional-registration-homepage.avif";
import image4 from "../../assets/logo/blood-donation-homepage.avif";
import image5 from "../../assets/images/patient-registration-no--homepage.jpeg";
import image6 from "../../assets/images/Health-facility-registry-homepage.jpeg";
import image7 from "../../assets/images/Health-care-professionals-registry-homepage.jpeg";
import image8 from "../../assets/images/blooddonation-camp-homepage.jpg";
function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [hoverTab, setHoverTab] = useState(null);
  
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setHoverTab(null);
  };

  const handleTabHover = (tabNumber) => {
    setHoverTab(tabNumber);
  };

  const handleTabLeave = () => {
    setHoverTab(null);
  };

  const tabContent = [
    {
      id: 1,
      title: "Patient Registration",
      image: image1,
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image5} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
              Patient registration on a healthcare website involves collecting
              personal and medical information to initiate medical care. This
              process helps healthcare providers maintain accurate records,
              track medical histories, and monitor treatments. By registering as
              a patient, individuals can ensure timely and effective medical
              care, while healthcare providers can deliver quality services.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: 2,
      title: "Health Facility Registration",
      image: image2,
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image6} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
              The Health Facility Registry is a comprehensive repository of all
              the country's health facilities across various medical systems. It
              encompasses both public and private health facilities, such as
              hospitals, clinics, diagnostic laboratories and imaging centres,
              pharmacies, and so on.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "HealthCare Professional Registration ",
      image: image3,
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image7} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
            Dear HealthPlus users, we are proud to inform you that our website has registered healthcare professionals from various hospitals. These professionals are dedicated to providing high-quality healthcare services to our users. By collaborating with them, we aim to offer you the best healthcare experience possible. Thank you for choosing HealthPlus as your trusted healthcare provider.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Blood Donation Camps",
      image: image4,
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image8} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
              Dear HealthPlus users, we are excited to inform you that we have collaborated with various hospitals to help you stay updated on upcoming blood donation camps. Through our partnership, we will keep you informed about blood donation camps taking place in these hospitals. Thank you for trusting HealthPlus as your healthcare provider.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const [userCount, setUserCount] = useState(null);
  const [professionalsCount, setProfessionalsCount] = useState(null);
  const [facilityCount, setFacilityCount] = useState(null);
  const [campCount, setCampCount] = useState(null);

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
  }, []);

  return (
    <>
    <Navbar/>
      <div className="components">
      <h1>HealthPlus Components</h1>
        <div className="top-section">
          {tabContent.map((tab) => (
            <div id="tab"
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""} ${
                hoverTab === tab.id ? "hover" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
              onMouseEnter={() => handleTabHover(tab.id)}
              onMouseLeave={handleTabLeave}
            >
              <img
                src={tab.image}
                alt={tab.title}
                style={{ borderRadius: "50%" }}
              />
              
              <h3>{tab.title}</h3>
            </div>
          ))}
        </div>
        <div className="bottom-section">
          {tabContent.map((tab) => (
            <div
              key={tab.id}
              className={`content ${activeTab === tab.id ? "active" : ""}`}
            >
              <div>{tab.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="statistics">
        <h1>HealthPlus Components Statistics</h1>
        <div className="stats-row">
          <div className="RecipientsReg">
            <img src={("https://abdm.gov.in:8081/uploads/ABHA_number_08b34b0423.svg")} alt={"RecipientsReg"}></img>
            <h3>{userCount}</h3>
            <p>HealthPlus Recipients Registered</p>
          </div>
          <div className="ProfessionalsReg">
            <img src={("	https://abdm.gov.in:8081/uploads/HPR_bcfb3ad8e3.svg")} alt={"ProfessionalsReg"}></img>
            <h3>{professionalsCount}</h3>
            <p>HealthPlus Professionals Registered</p>
          </div>
          <div className="FacilityReg">
            <img src={("	https://abdm.gov.in:8081/uploads/HFR_2195463482.svg")} alt={"FacilityReg"}></img>
            <h3>{facilityCount}</h3>
            <p>HealthPlus Facilities Registered</p>
          </div>
          <div className="CampsOrg">
            <img src={("	https://abdm.gov.in:8081/uploads/successfully_integrators_2368510485.svg")} alt={"CampsOrg"}></img>
            <h3>{campCount}</h3>
            <p>HealthPlus Blood Donation Camps Registered</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
