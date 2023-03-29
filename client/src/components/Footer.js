import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
   <>
    <footer>
        <div className="footer_container">
            <div className="link_lists">
                <h2>Contact</h2>
                <ul className='contact'>
                    <li><h3>Address</h3></li>
                    <li>HealthPlus, Chitkara University, Rajpura, Patiala - 140401</li>
                    <li><h3>E-Mail</h3></li>
                    <li><a href="mailto: healthplus@gmail.org">healthplus@gmail.org</a></li>
                    <li><h3>Toll-Free Number</h3></li>
                    <li>1800-00-0000</li>
                    {/* <li><h3>Social Media</h3></li> */}
                    <li>
                    <div className="icon_container">
                    <div className="icon">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                    </div>
                    </div>
                    </li>
                </ul>
            </div>
            <div className="link_lists">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="/">Ministry of Health and Family Welfare</a></li>
                    <li><a href="/">Ayushman Bharat Health Account (ABHA)</a></li>
                    <li><a href="/">Healthcare Professionals Registry (HPR)</a></li>
                    <li><a href="/">Health Facility Registry (HFR)</a></li>
                    <li><a href="/">Grievance Portal</a></li>
                    <li><a href="/">Tell us what you think of our website</a></li>
                </ul>
            </div>
            <div className="link_lists">
                <h2>Policies</h2>
                <ul>
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Website Policy</a></li>
                    <li><a href="/">Data Privacy Policy</a></li>
                    <li><a href="/">Health Data Management Policy</a></li>  
                </ul>
            </div>
        </div>
        <hr className='hr'/>
        <div className="footer-bottom">
        <p>© Designed and Developed by HealthPlus team | All Rights Reserved</p>
        <p>Page last updated on: 22-03-2023 | No. of Visitors: </p>
        </div>
    </footer>
  </>
  )
}

export default Footer