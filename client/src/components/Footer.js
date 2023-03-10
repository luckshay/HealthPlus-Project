import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
   <>
    <div class="footercontainer">
    <div class="col-md-6 pb-md-3 pb-lg-0 col-lg-3">
    <h4>Contact</h4>
    <div class="footerAddress">
    <div>
    <h6>Address</h6>
    <div class="font-14 weight-300">
    <p>9th Floor, Tower-I, Jeevan Bharati Building, Connaught Place, New Delhi - 110 001</p>
    </div>
    </div>
    <div>
    <h6>Toll-free-number</h6>
    <div class="font-14 weight-300">
    <p>1800-11-4477</p>
    </div>
    </div>
    <div>
    <h6>Email</h6>
    <div class="font-14 weight-300">
    <p>abdm[at]nha[dot]gov[dot]in</p>
    </div>
    </div>
    <div class="socialIcons">
    <h6 class="footerTitle">Social Media</h6>
    <ul class="list-inline">
    <li class="list-inline-item">
    <a href="https://www.facebook.com/AyushmanBharatGoI" target="_blank"><i class="bi bi-facebook"></i></a>
    </li>
    <li class="list-inline-item">
    <a href="https://www.youtube.com/channel/UCkd7w2rww0HQB4lZ-l3dB6g" target="_blank"><i class="bi bi-youtube"></i>
    </a>
    </li>
    <li class="list-inline-item"><a href="https://twitter.com/AyushmanNHA" target="_blank"><i class="bi bi-twitter"></i>
    </a>
    </li>
    <li class="list-inline-item"><a href="https://www.instagram.com/ayushmanbharatnha/" target="_blank">
    <i class="bi bi-instagram"></i></a>
    </li>
    </ul>
    </div>
    </div>
    </div>
   <div class="col-md-6 col-lg-3">
    <h3>Policies</h3>
    <div class="footerLinks">
        <ul>
            <li><a href="/terms-condition">Terms &amp; Conditions</a></li>
            <li><a href="/website-policy">Website Policy</a></li>
            <li><a target="_blank" href="https://abdm.gov.in:8081/uploads/privacypolicy_178041845b.pdf">Data Privacy Policy</a></li>
            <li><a target="_blank" href="https://abdm.gov.in:8081/uploads/health_management_policy_bac9429a79.pdf">Health Data Management Policy</a></li>
            </ul>
            </div>
            </div>
</div>
  </>
  )
}

export default Footer