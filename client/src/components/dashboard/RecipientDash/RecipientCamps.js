import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import '../../../styles/RecipientCamps.css';

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
    <div className='camp_details'>
      <h2>List of Camps</h2>
      <table className='camp_table'>
        <thead>
          <tr>
            <th>Organization Name</th>
            <th>Camp Name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {camps.map((camp, index) => (
            <tr key={index}>
              <td>{camp.orgName}</td>
              <td>{camp.campName}</td>
              <td>{camp.city}</td>
              <td>{camp.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampsList;
