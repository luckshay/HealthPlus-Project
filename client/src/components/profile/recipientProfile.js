import React, { useState, useEffect } from 'react';
import axios from 'axios';

const recipientProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfileInfo, setUpdatedProfileInfo] = useState({
    name: '',
    age: '',
    address: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch profile data from API or database
    axios.get('/api/profile')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedProfileInfo(profileData); // Set current profile data to the updatedProfileInfo state
  };

  const handleInputChange = e => {
    setUpdatedProfileInfo({
      ...updatedProfileInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Update profile data in API or database
    axios.put('/api/profile', updatedProfileInfo)
      .then(response => {
        setIsEditing(false);
        setProfileData(updatedProfileInfo);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Profile Information</h1>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={updatedProfileInfo.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            value={updatedProfileInfo.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            value={updatedProfileInfo.address}
            onChange={handleInputChange}
          />
          {/* Add more input fields for other profile information */}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Name: {profileData.name}</p>
          <p>Age: {profileData.age}</p>
          <p>Address: {profileData.address}</p>
          {/* Display other profile information */}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default recipientProfile;
