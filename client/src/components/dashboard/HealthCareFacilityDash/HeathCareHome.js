import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../../styles/RecipientHome.css"
const HeathCareHome = () => {
  return (
    <>
    <div className='main-container'>
    <div className="appointments-section">
        <h2 className='section-heading'>Cardiology</h2>
        <div className="card-section">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Ram Gupta</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Dr.Ram Gupta </Card.Subtitle> */}
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                        Qualifications : M.D<br/>
                        Experience : 15 years<br/>
                        Areas of Expertise : Interventional cardiology<br/>
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Sahil Mehta</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                        Qualifications : M.D<br/>
                        Experience : 9 years<br/>
                        Areas of Expertise : Heart failure management<br/>
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Khushi Sharma</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Dr. Harneet Narula</Card.Subtitle> */}
                    <Card.Text>
                    Qualifications : M.D<br/>
                        Experience : 3 years<br/>
                        Areas of Expertise : Physiology<br/><br/>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    <div  className="blood-donation-section">
        <h2 className='section-heading'>Pediatrics</h2>
        <div className='card-section'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Abha Gupta</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Rajpura</Card.Subtitle> */}
                    <Card.Text>
                    Qualifications : M.D<br/>
                        Experience : 20 years<br/>
                        Areas of Expertise : Pediatric echocardiography<br/><br/>
                    
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Sukhi Prasad</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Zirakpur</Card.Subtitle> */}
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                          Qualifications : M.D<br/>
                        Experience : 12 years<br/>
                        Areas of Expertise : Developmental Pediatrics<br/><br/>
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dr.Anuj Saini</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Rajpura</Card.Subtitle> */}
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                         Qualifications : M.D<br/>
                        Experience : 3 years<br/>
                        Areas of Expertise : Epilepsy management<br/><br/>
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
    </div>
</>
  )
}

export default HeathCareHome