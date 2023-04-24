import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../../config/axios";
import "../../../styles/Dashboardprofiles.css";

const RecipientProfile = () => {
  const id = sessionStorage.getItem("id");
  const [user, setUser] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isValidDate, setIsValidDate] = useState(true);
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [gender, setGender] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [blood_group, setBloodGroup] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/api/reciProfile/users/${id}`);
      const data = response.data;
      setUser(data);
      const formattedDOB = moment(data.dateOfBirth).format("YYYY-MM-DD");
      setDateOfBirth(formattedDOB);
      setGender(data.gender);
      setContactNo(data.contact_no);
      setAddress(data.address);
      setBloodGroup(data.blood_group);
      const years = moment().diff(data.dateOfBirth, "years");
      const months = moment().diff(data.dateOfBirth, "months") % 12;
      setAgeYears(years);
      setAgeMonths(months);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidDate) {
      alert("InValid Date");
      return;
    }
    try {
      await axios.put(`/api/reciProfile/users/${user._id}`, {
        dateOfBirth,
        gender,
        contact_no,
        address,
        blood_group,
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
    setDateOfBirth(user.dateOfBirth);
    setGender(user.gender);
    setContactNo(user.contact_no);
    setAddress(user.address);
    setBloodGroup(user.blood_group);
  };

  const handleDateChange = (event) => {
    const selectedDate = moment(event.target.value);
    const currentDate = moment();
    const isValid =
      selectedDate.isValid() && selectedDate.isSameOrBefore(currentDate);
    setIsValidDate(isValid);
    setDateOfBirth(event.target.value);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="maincontainer">
      {!isEditing && (
        <div className="userprofile">
          <div className="top-section">
            <h2>User Profile</h2>
            <div className="profile-picture">
              <img src={user.profilePicture} alt="Profile Picture" />
            </div>
          </div>
          <div className="username">
            Name: <div className="getInput"> {user.userName}</div>
          </div>
          <div className="useremail">
            Email: <div className="getInput"> {user.email}</div>
          </div>
          <div className="userdob">
            Date of Birth: <div className="getInput"> {user.dateOfBirth}</div>
          </div>
          <div className="userage">
            Age:{" "}
            <div className="getInput">
              {" "}
              {ageYears} years {ageMonths} months
            </div>
          </div>
          <div className="usergender">
            Gender: <div className="getInput"> {user.gender}</div>
          </div>
          <div className="usercontactno">
            Contact No: <div className="getInput"> {user.contact_no}</div>
          </div>
          <div className="address">
            Address: <div className="getInput"> {user.address}</div>
          </div>
          <div className="userbloodgroup">
            Blood Group: <div className="getInput"> {user.blood_group}</div>
          </div>
          <button className="userupdateprofile" onClick={handleEdit}>
            Update Profile
          </button>
        </div>
      )}
      {isEditing && (
        <form className="editprofile" onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateChange}
            />
            {!isValidDate && (
              <p style={{ color: "red" }}>
                Please select a valid date in the past
              </p>
            )}
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="" disabled selected>
                Select your Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
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
          <div>
            <label htmlFor="blood_group">Blood Group:</label>
            <select
              id="blood_group"
              value={blood_group}
              onChange={(event) => setBloodGroup(event.target.value)}
            >
              <option value="" disabled selected>
                Select a blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
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

export default RecipientProfile;
