import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
// import officers from '../officers.json'
import axios from 'axios';

function OfficerPage({match}) {
    const [officer, setOfficer] = useState([])

    const apiUrl = 'http://api.upssf.org'

    useEffect(() => {

        async function fetchOfficer() {
            
            const { data } = await axios.get(`${apiUrl}/api/officer/${match.params.id}/`)
            setOfficer(data)
        }

        fetchOfficer()

    }, [])
    
    return (
        <div>
            <Link to='/Officers' className='btn btn-light my-3'><i className="fas fa-arrow-left"></i>Go Back</Link>
            <Row>
                <Col md={3}>
                    <Image src={apiUrl + '/' + officer.image} alt={officer.name} fluid />
                </Col>
                <Col md={9}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{officer.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Position: {officer.position}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Biography: {officer.bio}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default OfficerPage
