import React, { useEffect, useState } from 'react';
import axios from "../../../config/axios"

function App() {
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  useEffect(() => {
    // Fetch facilities data from the backend API
    axios.get('/api/facilityProfile/getlist')
      .then((response) => setFacilities(response.data))
      .catch((error) => console.error('Failed to fetch facilities:', error));
  }, []);

  const handleProfessionalClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <div>
      <h1>Healthcare Facilities</h1>
      <ul>
        {facilities.map((facility) => (
          <li key={facility._id}>
            <h2>{facility.healthcare_facility_name}</h2>
            <p>{facility.address.line_1}</p>
            <p>{facility.address.line_2}</p>
            <p>
              {facility.address.city}, {facility.address.state} {facility.address.pincode}
            </p>
            <p>{facility.address.country}</p>
            <button onClick={() => handleProfessionalClick(facility)}>
              Show Professionals
            </button>
          </li>
        ))}
      </ul>

      {selectedFacility && (
        <div>
          <h2>Professionals at {selectedFacility.healthcare_facility_name}</h2>
          <ul>
            {selectedFacility.professionals.map((professional) => (
              <li key={professional._id}>
                <h3>{professional.name}</h3>
                <p>Speciality: {professional.speciality}</p>
                <p>Contact: {professional.contact_no}</p>
                <p>Email: {professional.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
