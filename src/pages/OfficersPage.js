import React, { useState, useEffect } from 'react'
// import './styles.css';
// import officers from './officers.json';
import ProfileCard from '../components/ProfileCard.js';
import { Row, Col, Image, ListGroup, Button, Card, Collapse } from 'react-bootstrap'

import axios from 'axios';

function Officers() {
    const [officers, setOfficers] = useState([])

    useEffect(() => {

        async function fetchOfficers() {
            const { data } = await axios.get('/api/officers/')
            setOfficers(data)
        }

        fetchOfficers()

    }, [])


    return (
        <div className="mt-3 mb-5">
            <Row>
                {officers.map(officer =>
                (
                    <Col key={officer._id} sm={12} md={6} lg={4} xl={3} className="my-4">
                        <ProfileCard officer={officer} />
                    </Col>
                )
                )}
            </Row>
            <Row className="row justify-content-center">
                <Col lg={12}>
                    <p>
                        Board members will be elected from those nominated by voting-members. A candidate should be a voting-member to be eligible. Nomination may be submitted by the candidate or by others on the candidate's behalf via e-mail. However, the nomination should be accepted by the candidate via e-mail or phone. A list containing the names of all candidates nominated will be posted in the SILAK-SILAB Foundation's website and e-mailed to the e-groups. Each voting-member may cast a vote for up to 5 candidates by sending an e-mail to the designated e-mail address below. A voting-member can cast only one vote for each candidate.
                        </p>
                </Col>
            </Row>
        </div>
    )
}

export default Officers;
