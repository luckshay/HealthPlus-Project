import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
   <>
    <footer>
        <div class="footer_container">
            <div class="link_lists">
                <h2>Address</h2>
                <ul className='address'>
                    <li>National Health Authority</li>
                    <li>9th Floor, Tower-l, Jeevan Bharati Building,</li>
                    <li>Connaught Place,</li>
                    <li>New Delhi - 110001</li>
                    <li>
                    <div class="icon_container">
                    <div class="icon">
                        <i class="fa fa-facebook"></i>
                    </div>
                    <div class="icon">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div class="icon">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div class="icon">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                    </div>
                </div>
                    </li>
                </ul>
            </div>
            <div class="link_lists">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="https://www.mohfw.gov.in/">Ministry of Health and Family Welfare</a></li>
                    <li><a href="https://healthid.abdm.gov.in/">Ayushman Bharat Health Account (ABHA)</a></li>
                    <li><a href="https://hpr.abdm.gov.in/en">Healthcare Professionals Registry (HPR)</a></li>
                    <li><a href="https://facility.ndhm.gov.in/">Health Facility Registry (HFR)</a></li>
                    <li><a href="#">Grievance Portal</a></li>
                    <li><a href="#">Tell us what you think of our website</a></li>
                </ul>
            </div>
            <div class="link_lists">
                <h2>Policies</h2>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Website Policy</a></li>
                    <li><a href="#">Data Privacy Policy</a></li>
                    <li><a href="#">Health Data Management Policy</a></li>
                    
                </ul>
            </div>
        </div>
        <hr className='hr'/>
        <div className="footer-bottom">
        <p>© Designed and Developed by HealthPlus team | All Rights Reserved</p>
        <p>Page last updated on: 22-03-2023 | No. of Visitors: 1,49,28,288</p>
        </div>
    </footer>
  </>
  )
}

export default Footer