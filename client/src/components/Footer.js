import React from "react";
import "../styles/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Footer = () => {

  const Navigate = useNavigate();

  const handleLinkClick = (policy) => {
    Navigate(`/policies?name=${policy}`);
  };

  const spanElements = document.querySelectorAll('span');
  spanElements.forEach(spanElement => {
    spanElement.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="link_lists">
          <h2 style={{cursor:"pointer"}} onClick={() => {Navigate('/Contact'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Contact</h2>
            <ul className="contact">
              <li>
                <h3>Address</h3>
              </li>
              <li>
                HealthPlus, Chitkara University, Rajpura, Patiala - 140401
              </li>
              <li>
                <h3>E-Mail</h3>
              </li>
              <li>
                <a href="mailto:healthplus@gmail.org">healthplus@gmail.org</a>
              </li>
              <li>
                <h3>Toll-Free Number</h3>
              </li>
              <li>
                <a href="tel:1800-00-0000">1800-00-0000</a>
              </li>
              <li>
                <h3>Social Media</h3>
              </li>
              <li>
                <div className="icon_container">
                  <div className="icon">
                    <BsFacebook />
                  </div>
                  <div className="icon">
                    <BsTwitter />
                  </div>
                  <div className="icon">
                    <BsInstagram />
                  </div>
                  <div className="icon">
                    <BsYoutube />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="link_lists">
            <h2>Important Links</h2>
            <ul>
            <li>
                <span onClick={() =>Navigate('/Signup')}>HealthPlus Recipeints Registry</span>
              </li>
              <li>
                <span onClick={() =>Navigate('/Signup')}>HealthPlus Professionals Registry</span>
              </li>
              <li>
                <span onClick={() =>Navigate('/Signup')}>HealthPlus Facility Registry</span>
              </li>
              <li>
                <span onClick={() =>Navigate('/Signup')}>HealthPlus Blood Donation Camp Registry</span>
              </li>
              <li>
                <span onClick={() =>Navigate('/Contact')}>Grievance Portal</span>
              </li>
              <li>
                <span onClick={() =>Navigate('/Contact')}>Tell us what you think of our website</span>
              </li>
            </ul>
          </div>
          <div className="link_lists">
          <h2 style={{cursor:"pointer"}} onClick={() => {Navigate('/Policies'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Policies</h2>
            <ul>
              <li>
              <span onClick={() => handleLinkClick("Terms and Conditions")}>Terms and Conditions</span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("Website Policy")}>Website Policy</span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("Data Privacy Policy")}>Data Privacy Policy</span>
              </li>
              <li>
                <span onClick={() => handleLinkClick("Health Data Management Policy")}>Health Data Management Policy</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr" />
        <div className="footer-bottom">
          <p>
            © Designed and Developed by HealthPlus team | All Rights Reserved
          </p>
          <p>Page last updated on: 22-03-2023 | No. of Visitors: </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
