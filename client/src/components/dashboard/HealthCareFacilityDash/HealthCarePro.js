import React, { useState, useEffect } from 'react';
import moment from "moment";
import axios from '../../../config/axios';
import "../../../styles/Campsprofile.css";
const HealthCarePro = () => {
  const id = sessionStorage.getItem("id");
  const [facility, setFacility] = useState("")
  const [pros, setPros] = useState([]);
  const [isValidDate, setIsValidDate] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newPros, setNewPros] = useState({
    name: "",
    speciality: "",
    contact_no: "",
    email: "",
    joining_date: "",
    leaving_date: "",
  });
  const fetchPros = async () => {
    try {
      const response = await axios.get(`/api/facilityProfile/pros/${id}`);
      const data = response.data;
      setFacility(data)
      setPros(data.professionals)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPros();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidDate) {
      alert("InValid Date");
      return;
    }
    console.log(newPros)
    try {
      await axios.post(`/api/facilityProfile/registernewpros/${facility._id}`, newPros);
      setIsAdding(false)
      await fetchPros();
    } catch (err) {
      console.error(err);
    }
  };
  const handleDateChange = (event, field) => {
    const value = event.target.value;
    const currentDate = moment();
    const selectedDate = moment(value, "YYYY-MM-DD");
    const isValid =
      selectedDate.isValid() && selectedDate.isSameOrBefore(currentDate);

    setNewPros((prevPros) => ({
      ...prevPros,
      [field]: value,
    }));

    setIsValidDate(isValid);
  };
  const handleAdd = () => {
    setIsAdding(true);
  };
  const handleCancel = () => {
    setIsAdding(false);
  };
  return (
    <>
      <div>
        {!isAdding && (
          <div className='main-table'>
            <h2>HealthCare Professionals List:</h2>
            {pros.length > 0 && (
              <div>
                <table className='main-table'>
                  <thead>
                    <tr>
                      <th>Professional Name</th>
                      <th>Speciality</th>
                      <th>Contact Number</th>
                      <th>Email</th>
                      <th>Joining Date</th>
                      <th>Leaving Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pros.map(pro => (
                      <tr key={pro._id}>
                        <td>{pro.name}</td>
                        <td>{pro.speciality}</td>
                        <td>{pro.contact_no}</td>
                        <td>{pro.email}</td>
                        <td>{pro.joining_date}</td>
                        <td>{pro.leaving_date}</td>
                        <td>
                          <button className='buttons' onClick="update">
                            Update
                          </button>
                          <button className='buttons' onClick="">
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {pros.length === 0 && (
              <p>No HealthCare Professional found</p>
            )}
            <button className="buttons" onClick={handleAdd}>Add a new Professional</button>
          </div>
        )}
      </div>
      {isAdding && (
        <form onSubmit={handleSubmit}>
          <h2>Add New Professional</h2>
          <div>
            <label htmlFor='name'>Name of Professional</label>
            <input
              type="text"
              id="name"
              placeholder='Name of Professional'
              required
              value={pros.name}
              onChange={(event) => setNewPros({ ...newPros, name: event.target.value })}
            />
          </div>
          <div>
            <label htmlFor='Speciality'>Speciality</label>
            <input
              type="text"
              id="speciality"
              placeholder='Speciality'
              required
              value={pros.speciality}
              onChange={(event) => setNewPros({ ...newPros, speciality: event.target.value })}
            />
          </div>
          <div>
          <label htmlFor="email">E-mail address</label>
          <input 
          type="email" 
          id="email" 
          placeholder='Enter E-mail'
          required
          value={pros.email} 
          onChange={(event) => setNewPros({ ...newPros, email: event.target.value })}  ></input>
          </div>
          <div>
            <label htmlFor="contact_no">Contact No:</label>
            <input
              type="tel"
              id="contact_no"
              pattern="[0-9]{10}"
              placeholder="XXXXX-XXXXX"
              onChange={(event) => setNewPros({ ...newPros, contact_no: event.target.value })}
            />
          </div>
          <div>
            <label htmlFor="joining_date">Joining Date:</label>
            <input
              type="date"
              id="joining_date"
              value={newPros.joining_date}
              onChange={(event) => handleDateChange(event, "joining_date")} />
            {!isValidDate && (
              <p style={{ color: "red" }}>
                Please select a valid date in the past
              </p>
            )}
          </div>
          <div>
            <label htmlFor="leaving_date">Leaving Date:</label>
            <input
              type="date"
              id="leaving_date"
              value={newPros.leaving_date}
              onChange={(event) => handleDateChange(event, "leaving_date")} />
            {!isValidDate && (
              <p style={{ color: "red" }}>
                Please select a valid date in the past
              </p>
            )}
          </div>
          <button type="submit">Add Professional</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
    </>
  )
}

export default HealthCarePro