import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';


const BloodDonationOrganisationCamps = () => {
    const id = sessionStorage.getItem("id");
    const [org, setOrg] = useState("")
    const [camps, setCamps] = useState([]);

    const [startTimeHours, setStartTimeHours] = useState('1');
    const [startTimeMinutes, setStartTimeMinutes] = useState('00');
    const [startTimeAmPm, setStartTimeAmPm] = useState('AM');

    const [endTimeHours, setEndTimeHours] = useState('1');
    const [endTimeMinutes, setEndTimeMinutes] = useState('00');
    const [endTimeAmPm, setEndTimeAmPm] = useState('AM');

    const [isAdding, setIsAdding] = useState(false);
    const [newCamp, setNewCamp] = useState({
        campName: "",
        isActive: false,
        address: {
            line_1: "",
            line_2: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        },
        date: "",
        start_time: "",
        end_time: "",
        units_collected: {
            A_positive: 0,
            A_negative: 0,
            B_positive: 0,
            B_negative: 0,
            AB_positive: 0,
            AB_negative: 0,
            O_positive: 0,
            O_negative: 0
        }
    });

    const fetchCamps = async () => {
        try {
            const response = await axios.get(`/api/orgProfile/camps/${id}`);
            const data = response.data;
            setOrg(data)
            setCamps(data.camps)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCamps();
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const startTime = `${startTimeHours}:${startTimeMinutes} ${startTimeAmPm}`;
        const endTime = `${endTimeHours}:${endTimeMinutes} ${endTimeAmPm}`;
        try {
            const newCampData = { ...newCamp, start_time: startTime, end_time: endTime };
            await axios.post(`/api/orgProfile/registernewCamp/${org._id}`, newCampData);
            setIsAdding(false)
            await fetchCamps();
        } catch (err) {
            console.error(err);
        }
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
                    <div>
                        <h2>Camps List</h2>
                        {camps.length > 0 && (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Camp Name</th>
                                            <th>Date</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Address</th>
                                            <th>Units Collected</th>
                                            <th>Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {camps.map(camp => (
                                            <tr key={camp._id}>
                                                <td>{camp.camp_name}</td>
                                                <td>{new Date(camp.date).toLocaleDateString()}</td>
                                                <td>{camp.start_time}</td>
                                                <td>{camp.end_time}</td>
                                                <td>{`${camp.address.line_1}, ${camp.address.line_2}, ${camp.address.city}, ${camp.address.state}, ${camp.address.zip}`}</td>

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
                                                <td>{camp.isActive}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {camps.length === 0 && (
                            <p>No camps found</p>
                        )}
                        <button className="buttons" onClick={handleAdd}>Add a new Camp</button>
                    </div>
                )}


                {isAdding && (
                    <form onSubmit={handleSubmit}>
                        <h2>Add New Camp</h2>
                        <div>
                            <label htmlFor='campName'>Name of Camp</label>
                            <input
                                type="text"
                                id="campName"
                                placeholder='Name of Camp'
                                required
                                value={newCamp.campName}
                                onChange={(event) => setNewCamp({ ...newCamp, campName: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address_line_1"
                                placeholder="Line-1"
                                value={newCamp.address.line_1}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        line_1: event.target.value,
                                    },
                                })}
                            />
                            <input
                                type="text"
                                id="address_line_2"
                                placeholder="Line-2"
                                value={newCamp.address.line_2}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        line_2: event.target.value,
                                    },
                                })}
                            />
                            <input
                                type="text"
                                id="address_city"
                                placeholder="City"
                                value={newCamp.address.city}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        city: event.target.value,
                                    },
                                })}
                            />
                            <input
                                type="text"
                                id="address_state"
                                placeholder="State"
                                value={newCamp.address.state}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        state: event.target.value,
                                    },
                                })}
                            />
                            <input
                                type="number"
                                id="address_pincode"
                                placeholder="Pincode"
                                value={newCamp.address.pincode}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        pincode: event.target.value,
                                    },
                                })}
                            />
                            <input
                                type="text"
                                id="address_country"
                                placeholder="Country"
                                value={newCamp.address.country}
                                onChange={(event) => setNewCamp({
                                    ...newCamp,
                                    address: {
                                        ...newCamp.address,
                                        country: event.target.value,
                                    },
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                value={newCamp.date}
                                onChange={(event) => setNewCamp({ ...newCamp, date: event.target.value })}
                            />
                        </div>
                        <div>
                            <label for="starttime">Start Time:</label>
                            <select name="hours"
                                value={startTimeHours} onChange={(event) => setStartTimeHours(event.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select name="minutes"
                                value={startTimeMinutes} onChange={(event) => setStartTimeMinutes(event.target.value)}>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                            <select name="ampm"
                                value={startTimeAmPm} onChange={(event) => setStartTimeAmPm(event.target.value)}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <div>
                            <label for="endtime">End Time:</label>
                            <select name="hours"
                            value={endTimeHours} onChange={(event) => setEndTimeHours(event.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select name="minutes"
                            value={endTimeMinutes} onChange={(event) => setEndTimeMinutes(event.target.value)}>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                            <select name="ampm"
                             value={endTimeAmPm} onChange={(event) => setEndTimeAmPm(event.target.value)}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>

                        </div>


                        <button type="submit">Add Camp</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </>
    )
}

export default BloodDonationOrganisationCamps;
