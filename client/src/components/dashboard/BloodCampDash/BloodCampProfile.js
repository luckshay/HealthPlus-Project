import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import "../../../styles/Dashboardprofiles.css";
const BloodCampProfile = () => {
  const id = sessionStorage.getItem("id");
  const [org, setOrg] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [contact_no, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/api/campProfile/camps/${id}`);
      const data = response.data;
      setOrg(data);
      console.log(data);
      setContactNo(data.contact_no);
      setAddress(data.address);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/campProfile/camps/${org._id}`, {
        contact_no,
        address,
      });
      setIsEditing(false);
      await fetchUser();
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
    setAddress(org.address);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <form class="orgprofile">
        {!isEditing && (
          <div>
            <h2>User Profile</h2>
            <div className="orgname">Name: {org.orgName}</div>
            <div className="orgemail">Email: {org.email}</div>
            <div className="orgcontact">Contact No: {org.contact_no}</div>
            <div className="orgaddress">Address: {org.address}</div>
            <button onClick={handleEdit}>Update Profile</button>
          </div>
        )}
        {isEditing && (
          <form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <div>
              <label htmlFor="contact_no">Contact No:</label>
              <input
                type="number"
                id="contact_no"
                value={contact_no}
                onChange={(event) => setContactNo(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
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
      </form>
    </div>
  );
};

export default BloodCampProfile;
