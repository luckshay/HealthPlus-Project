import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../../config/axios";
import "../../../styles/Dashboardprofiles.css";
import "../../../styles/form.css";

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
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  });
  const [blood_group, setBloodGroup] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/api/reciProfile/users/${id}`);
      const data = response.data;
      setUser(data);
      const formattedDOB = moment(data.dateOfBirth).format("DD-MM-YYYY");
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
        address: {
          line_1: address.line_1,
          line_2: address.line_2,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          country: address.country,
        },
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
    setDateOfBirth(dateOfBirth);
    setGender(user.gender);
    setContactNo(user.contact_no);
    setAddress({...user.address});
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
        <div className="profile">
          <table>
            <thead>
              <tr>
                <th colSpan="2"><h2>User Profile</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{user.userName}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>{dateOfBirth}</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>{ageYears} years {ageMonths} months</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <th>Contact No:</th>
                <td>{user.contact_no}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{address.line_1}, {address.line_2}, {address.city}, {address.state}, {address.pincode}, {address.country}</td>
              </tr>
              <tr>
                <th>Blood Group:</th>
                <td>{user.blood_group}</td>
              </tr>
            </tbody>
          </table>
          <button className="buttons" onClick={handleEdit}>
            Update Profile
          </button>
        </div>
      )}
      {isEditing && (
        <form className="editprofile" onSubmit={handleSubmit}>
          <h1>Edit Profile</h1>
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
              type="tel"
              id="contact_no"
              pattern="[0-9]{10}"
              value={contact_no}
              onChange={(event) => setContactNo(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address_line_1"
              placeholder="Line-1"
              value={address.line_1}
              onChange={(event) => setAddress({ ...address, line_1: event.target.value })}
            />
            <input
              type="text"
              id="address_line_2"
              placeholder="Line-2"
              value={address.line_2}
              onChange={(event) => setAddress({ ...address, line_2: event.target.value })}
            />
            <input
              type="text"
              id="address_city"
              placeholder="City"
              value={address.city}
              onChange={(event) => setAddress({ ...address, city: event.target.value })}
            />
            <input
              type="text"
              id="address_state"
              placeholder="State"
              value={address.state}
              onChange={(event) => setAddress({ ...address, state: event.target.value })}
            />
            <input
              type="number"
              id="address_pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(event) => setAddress({ ...address, pincode: event.target.value })}
            />
            <input
              type="text"
              id="address_country"
              placeholder="Country"
              value={address.country}
              onChange={(event) => setAddress({ ...address, country: event.target.value })}
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
