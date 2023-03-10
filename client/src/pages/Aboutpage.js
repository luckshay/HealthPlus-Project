import React from 'react'
import '../styles/aboutpage.css'
const Aboutpage = () => {
  return (
    <div className="container">
      {/* hero section */}
        <section className="hero-section" align="center">
          <div className="hero-content">
          <h5>ABOUT US</h5>
          <h1>HEALTHPLUS MAKING YOUR LIFE BETTER</h1>
          <p>Welcome to HealthPlus! We are a healthcare analytics platform dedicated to improving the quality of healthcare services and patient outcomes through data-driven insights and innovative solutions.</p>
           <button className="btn btn-primary">Get Started</button>
           </div>
           <div className="hero-img">
          <img src={require("../assets/images/about-us-main-image.jpg")} alt="hero-image"width="80%"></img>
          </div>
        </section>

    {/* motto section     */}
        <section className="motto">
        <h5>OUR MOTTO</h5>
          <div className="motto-content">
          <div className="motto-image">
            <img src={require("../assets/images/about-us-motto-image.jpg")} alt={"about-us-motto-image"} width="80%"></img>
          </div>
          <div className="motto-text">
          <p>At HealthPlus, we believe that every patient deserves the best possible care and that every healthcare provider deserves the tools and resources to deliver that care efficiently and effectively. That's why we have created a comprehensive platform that brings together patients, healthcare providers, and other stakeholders to facilitate better communication, collaboration, and decision-making.</p>
          </div>
</div>
        </section>
{/* user-friendly section */}
<section className="user-friendly">
  <h5>USER-FRIENDLY</h5>
  <div className="user-friendly-content">
  Our platform is built on the latest technologies and industry standards, ensuring maximum security, reliability, and scalability. With a user-friendly interface and intuitive navigation, our platform is easy to use for everyone, regardless of their technical expertise.
  </div>
  <div className="user-friendly-image">
    <img src={require("../assets/images/about-us-user-friendly-image.jpg")}></img>
  </div>
</section>
        {/* vision section */}
        <section className="vision">
          <h5>OUR VISION</h5>
          <div className="vision-content">
          <div className="vision-text">
          <p>We are committed to continuous improvement and innovation, and we work closely with our clients and partners to ensure that our platform meets their evolving needs and expectations. Our team of experts brings extensive experience in healthcare analytics, software development, and data science, and we are always looking for new ways to leverage technology to improve healthcare outcomes.</p>
          </div>
          <div className="vision-image">
            <img src={require("../assets/images/about-us-our-vision.jpg")} alt="our vision"></img>
          </div>
          
          </div>
        </section>
{/* regards section */}
        <section className="regards">
          <h5>THANKS AND REGARDS</h5>
          <div className="regards-content">
            <p>Thank you for choosing HealthPlus. We look forward to partnering with you to transform healthcare for the better.</p>
          </div>
        </section>
    </div>
  )
}

export default Aboutpage