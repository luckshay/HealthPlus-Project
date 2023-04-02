import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "../../styles/Contact.css";

const ContactPage = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="row">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <h4>Address</h4>
            <p>HealthPlus, Chitkara University</p>
            <p>Rajpura, Patiala - 140401</p>
            <h4>Toll-Free Number</h4>
            <p><a href="tel:1800-00-0000">1800-00-0000</a></p>
            <h4>E-Mail</h4>
            <p><a href="mailto:healthplus@gmail.org">healthplus@gmail.org</a></p>
          </div>
          <div className="map">
            <h3>Map</h3>
            <Map
              google={props.google}
              zoom={14}
              style={{ height: "25rem", width:"45rem" }}  
              initialCenter={{ lat: 39.7392, lng: -104.9903 }}
            >
              <Marker position={{ lat: 39.7392, lng: -104.9903 }} />
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY_GOES_HERE",
})(ContactPage);
