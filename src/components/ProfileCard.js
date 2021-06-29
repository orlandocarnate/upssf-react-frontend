import React from 'react';
// import './components-styles.css';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProfileCard({ officer }) {
    return (
        <Card className="profile-card-5 rounded">
            <Link to={`/officer/${officer._id}`}>
                <Card.Img variant="top" src={officer.image} />
            </Link>
            <Card.Body className="pt-0">
                <Card.Title>{officer.name}</Card.Title>
                <Card.Subtitle>{officer.position}</Card.Subtitle>
                <Card.Text>{officer.bio}</Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ProfileCard
