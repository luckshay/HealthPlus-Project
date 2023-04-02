import React from 'react'
import '../../styles/About.css'
const Aboutpage = () => {
  return (
    <div className="about-container">
      {/* hero section */}
        <section className="section-a" align="center">
          <div className="section-a-content">
          <h1>HEALTHPLUS: MAKING YOUR LIFE BETTER</h1>
          <p>Welcome to HealthPlus! We are a healthcare analytics platform dedicated to improving the quality of healthcare services and patient outcomes through data-driven insights and innovative solutions.</p>

           </div>
           <div className="section-a-img">
          <img src={require("../../assets/images/about-us-main-image.jpg")} alt={"about-us-main"}width="80%"></img>
          </div>
        </section>

    {/* motto section     */}
        <section className="section-b" align="center">
          <div className="section-b-image">
            <img src={require("../../assets/images/about-us-motto-image.jpg")} alt={"about-us-motto"}></img>
          </div>
          <div className="section-b-content">
          <h1>OUR MOTTO</h1>
          <p>At HealthPlus, we believe that every patient deserves the best possible care and that every healthcare provider deserves the tools and resources to deliver that care efficiently and effectively. That's why we have created a comprehensive platform that brings together patients, healthcare providers, and other stakeholders to facilitate better communication, collaboration, and decision-making.</p>
          </div>
        </section>
{/* user-friendly section */}
<section className="section-a" align="center">
  <div className="section-a-content">
  <h1>USER-FRIENDLY</h1>
  <p>Our platform is built on the latest technologies and industry standards, ensuring maximum security, reliability, and scalability. With a user-friendly interface and intuitive navigation, our platform is easy to use for everyone, regardless of their technical expertise.</p>

  </div>
  <div className="section-a-img">
    <img src={require("../../assets/images/about-us-user-friendly-image.jpg")} alt={"about-us-user-friendly"}width="80%"></img>
  </div>
</section>
        {/* vision section */}
        <section className="section-b">
          <div className="section-b-image">
            <img src={require("../../assets/images/about-us-our-vision.jpg")} alt={"our vision"}width="80%"></img>
          </div>
          
          <div className="section-b-content" align="center">
            <h1>OUR VISION</h1>
            <p>We are committed to continuous improvement and innovation, and we work closely with our clients and partners to ensure that our platform meets their evolving needs and expectations. Our team of experts brings extensive experience in healthcare analytics, software development, and data science, and we are always looking for new ways to leverage technology to improve healthcare outcomes.</p>
          
          </div>
        </section>
{/* regards section */}
        <section className="regards">
          <h1>THANKS AND REGARDS</h1>
          <div className="regards-content">
            <p>Thank you for choosing HealthPlus. We look forward to partnering with you to transform healthcare for the better.</p>
          </div>
        </section>
    </div>
  )
}

export default Aboutpage