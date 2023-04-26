import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import "../../../styles/Dashboardprofiles.css";
import "../../../styles/form.css";

const HealthcareProfile = () => {
  const id = sessionStorage.getItem("id");
  const [facility, setFacility] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [registration_no, setRegNo]=useState("")
  const [contact_no, setContactNo] = useState("");
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  });

  const fetchFacility = async () => {
    try {
      const response = await axios.get(`/api/facilityProfile/facilities/${id}`);
      const data = response.data;
      setFacility(data);
      setRegNo(data.registration_no);
      setContactNo(data.contact_no);
      setAddress(data.address);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/facilityProfile/facilities/${facility._id}`, {
        registration_no,
        contact_no,
        address: {
          line_1: address.line_1,
          line_2: address.line_2,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          country: address.country,
        },
      });
      setIsEditing(false);
      await fetchFacility();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setRegNo(facility.registration_no);
    setContactNo(facility.contact_no);
    setAddress({...facility.address});
  };

  useEffect(() => {
    fetchFacility();
  }, []);

  return (
    <div className="maincontainer">
      {!isEditing && (
        <div className="profile">
          <table>
            <thead>
              <tr>
                <th colSpan={2}><h2>Facility Profile</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{facility.healthcare_facility_name}</td>
              </tr>
              <tr>
                <th>Registration No:</th>
                <td>{facility.registration_no}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{facility.email}</td>
              </tr>
              <tr>
                <th>Contact No:</th>
                <td>{contact_no}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{address.line_1}, {address.line_2}, {address.city}, {address.state}, {address.pincode}, {address.country}</td>
              </tr>
            </tbody>
          </table>
          <button className="buttons" onClick={handleEdit}>Update Profile</button>
        </div>
      )}
      {isEditing && (
        <form className="editprofile" onSubmit={handleSubmit}>
          <h1>Edit Profile</h1>
          <div>
            <label htmlFor="reg_no">Registration Number:</label>
            <input
              type="text"
              id="reg_no"
              placeholder="Registration Number"
              onChange={(event) => setRegNo(event.target.value )}
            />
            </div>
          <div>
            <label htmlFor="contact_no">Contact No:</label>
            <input
              type="tel"
              id="contact_no"
              pattern="[0-9]{10}"
              placeholder="XXXXX-XXXXX"
              onChange={(event) => setContactNo(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address_line_1"
              placeholder="Address Line 1"
              onChange={(event) => setAddress({ ...address, line_1: event.target.value })}
            />
            <input
              type="text"
              id="address_line_2"
              placeholder="Address Line 2"
              onChange={(event) => setAddress({ ...address, line_2: event.target.value })}
            />
            <input
              type="text"
              id="address_city"
              placeholder="City"
              onChange={(event) => setAddress({ ...address, city: event.target.value })}
            />
            <input
              type="text"
              id="address_state"
              placeholder="State"
              onChange={(event) => setAddress({ ...address, state: event.target.value })}
            />
            <input
              type="number"
              id="address_pincode"
              placeholder="Pincode"
              onChange={(event) => setAddress({ ...address, pincode: event.target.value })}
            />
            <input
              type="text"
              id="address_country"
              placeholder="Country"
              onChange={(event) => setAddress({ ...address, country: event.target.value })}
            />
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HealthcareProfile;
