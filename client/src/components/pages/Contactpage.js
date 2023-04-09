import React, { useState } from "react";
import axios from '../../config/axios'

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('/api/userquery', formData);
      alert(res.data.message);
    } catch (error) {
      const res = error.response;
      alert(res.data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-container">
      <h2>Contact Us</h2>
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
              required
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
              required
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
              required
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
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <h4>Address</h4>
        <p>HealthPlus, Chitkara University</p>
        <p>Rajpura, Patiala - 140401</p>
        <h4>Toll-Free Number</h4>
        <p><a href="tel:1800-00-0000">1800-00-0000</a></p>
        <h4>E-Mail</h4>
        <p><a href="mailto:healthplus@gmail.org">healthplus@gmail.org</a></p>
        <h4>Map</h4>
        <div className="map-container">
        <iframe
        title="locstion"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751370296724!2d76.65529312608415!3d30.51608642322264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1680468676794!5m2!1sen!2sin"
        width="100%"
        height="90%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
    </div>
  );
};

export default (ContactPage);
