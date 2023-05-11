import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';

const CampsList = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await axios.get('/api/orgProfile/getlist');
        setCamps(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCamps();
  }, []);

  return (
    <div>
      <h2>List of Camps</h2>
      <ul>
        {camps.map((camp, index) => (
          <li key={index}>
            <h3>{camp.orgName}</h3>
            <p>Camp Name: {camp.campName}</p>
            <p>City: {camp.city}</p>
            <p>State: {camp.state}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampsList;
