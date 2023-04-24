import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BloodDonationOrganisationCamps = () => {
    const id = sessionStorage.getItem("id");
    const [camps, setCamps] = useState([]);

    const fetchCamps= async () => {
        try {
          const response = await axios.get(`/api/orgProfile/camps/${id}`);
          const data = response.data;
          setCamps(data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchCamps();
      }, []);

    return (
        <>
            <div>
                <h2>Camps List</h2>
                {camps.length == 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Camp Name</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Units Collected</th>
                            </tr>
                        </thead>
                        <tbody>
                            {camps.map(camp => (
                                <tr key={camp._id}>
                                    <td>{camp.camp_name}</td>
                                    <td>{new Date(camp.date).toLocaleDateString()}</td>
                                    <td>{camp.start_time}</td>
                                    <td>{camp.end_time}</td>
                                    <td>
                                        A+: {camp.units_collected.A_positive}<br />
                                        A-: {camp.units_collected.A_negative}<br />
                                        B+: {camp.units_collected.B_positive}<br />
                                        B-: {camp.units_collected.B_negative}<br />
                                        AB+: {camp.units_collected.AB_positive}<br />
                                        AB-: {camp.units_collected.AB_negative}<br />
                                        O+: {camp.units_collected.O_positive}<br />
                                        O-: {camp.units_collected.O_negative}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No camps found</p>
                )}
            </div>
        </>
    )
}

export default BloodDonationOrganisationCamps
