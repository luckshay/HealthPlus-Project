import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import "../../../styles/Dashboardprofiles.css";
import "../../../styles/form.css";

const BloodCampProfile = () => {
  const id = sessionStorage.getItem("id");
  const [org, setOrg] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [contact_no, setContactNo] = useState("");
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  });

  const fetchOrg = async () => {
    try {
      const response = await axios.get(`/api/orgProfile/orgs/${id}`);
      const data = response.data;
      setOrg(data);
      setContactNo(data.contact_no);
      setAddress(data.address);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/orgProfile/orgs/${org._id}`, {
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
      await fetchOrg();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setContactNo(org.contact_no);
    setAddress({...org.address});
  };

  useEffect(() => {
    fetchOrg();
  }, []);

  return (
    <div className="maincontainer">
      {!isEditing && (
        <div className="profile">
          <table>
            <thead>
              <tr>
                <th colSpan={2}><h2>User Profile</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{org.orgName}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{org.email}</td>
              </tr>
              <tr>
                <th>Contact No:</th>
                <td>{org.contact_no}</td>
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

export default BloodCampProfile;
