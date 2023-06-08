import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../../styles/RecipientHome.css"
const RecipientHome = () => {
    return (
        <>
            <div className='main-container'>
            <div className="appointments-section">
                <h2 className='section-heading'>Your Appointments</h2>
                <div className="card-section">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Apollo Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Dr.Ram Gupta </Card.Subtitle>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                                Date: June 10,2023<br></br>
                                Time:10:00 AM<br></br>
                                Specialty: Cardiolody
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Neelam Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Dr.Shyam Bhatia</Card.Subtitle>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                                Date: June 11,2023<br></br>
                                Time:11:00 AM<br></br>
                                Specialty: Pediatrics
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Max Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Dr. Harneet Narula</Card.Subtitle>
                            <Card.Text>
                            Date: June 14,2023<br></br>
                                Time:1:00 PM<br></br>
                                Specialty: Orthopedics
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            <div  className="blood-donation-section">
                <h2 className='section-heading'>Active Blood Donation Camps</h2>
                <div className='card-section'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>City Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rajpura</Card.Subtitle>
                            <Card.Text>
                            Date: June 10,2023<br></br>
                            Start Time:10:00 AM<br></br>
                            End Time: 5:00 PM<br></br>
                            
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>WellSpring Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Zirakpur</Card.Subtitle>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                                 Date: June 11,2023<br></br>
                            Start Time:10:00 AM<br></br>
                            End Time: 5:00 PM<br></br>
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Apex Hospital</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rajpura</Card.Subtitle>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                                 Date: June 11,2023<br></br>
                            Start Time:10:00 AM<br></br>
                            End Time: 5:00 PM<br></br>
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

export default RecipientHome
