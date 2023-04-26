import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import "../../../styles/Campsprofile.css";
const HealthCarePro = () => {
  const id = sessionStorage.getItem("id");
  const [facility, setfacility] = useState("")
  const [pros, setpros] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newPros, setNewPros] = useState({
    name: "",
    speciality: "",
    contact_no: "",
    email: "",
    joining_date: "",
    leaving_date: "",
  });
  const fetchPros = async () => {
    try {
        const response = await axios.get(`/api/facilityProfile/pros/${id}`);
        const data = response.data;
        setOrg(data)
        setCamps(data.camps)
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div>HealthCarePro</div>
  )
}

export default HealthCarePro