import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios"

const RecipientProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");

    const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/users/${id}`);
          const { data } = response;
          setUser(data);
          setName(data.name);
          setAge(data.age);
          setGender(data.gender);
          setContactNo(data.contact_no);
          setEmail(data.email);
          setAddress(data.address);
          setBloodGroup(data.blood_group);
        } catch (error) {
          console.error(error);
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/users/${user._id}`, {
                name,
                age,
                gender,
                contactNo,
                email,
                address,
                bloodGroup,
            });
            setIsEditing(false);
            fetchUser();
        } catch (err) {
            console.error(err);
        }
    };


const handleEdit = () => {
    setIsEditing(true);
};

const handleCancel = () => {
    setIsEditing(false);
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setContactNo(user.contact_no);
    setEmail(user.email);
    setAddress(user.address);
    setBloodGroup(user.blood_group);
};

if (!user) {
    return <div>Loading user profile...</div>;
}

return (
    <div>
        {!isEditing && (
            <div>
                <h2>User Profile</h2>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>Gender: {user.gender}</div>
                <div>Contact No: {user.contact_no}</div>
                <div>Email: {user.email}</div>
                <div>Address: {user.address}</div>
                <div>Blood Group: {user.blood_group}</div>
                <button onClick={handleEdit}>Update Profile</button>
            </div>
        )}
        {isEditing && (
            <form onSubmit={handleSubmit}>
                <h2>Edit Profile</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">
                            Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="contactNo">Contact No:</label>
                    <input type="text" id="contactNo" value={contactNo} onChange={(event) => setContactNo(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <input type="text" id="bloodGroup" value={bloodGroup} onChange={(event) => setBloodGroup(event.target.value)} />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        )}
    </div>
);
};

export default RecipientProfile;