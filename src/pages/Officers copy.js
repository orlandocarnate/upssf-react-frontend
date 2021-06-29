import React, { Component, useState, useEffect } from 'react'
// import './styles.css';
// import officers from './officers.json';
import ProfileCard from '../components/ProfileCard.js';

import axios from 'axios';

class Officers extends Component {
    state = {
        officers: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/officers/')
            .then(res => {
                const officers = res.data;
                this.setState({ officers });
            })
    }

    render() {


        return (
            <div className="mt-3 mb-5">
                <div className="row">
                    {this.state.officers.map(officer => {
                        return (
                            <ProfileCard
                                key={officer.id}
                                officer={officer}
                            />
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <p>
                            Board members will be elected from those nominated by voting-members. A candidate should be a voting-member to be eligible. Nomination may be submitted by the candidate or by others on the candidate's behalf via e-mail. However, the nomination should be accepted by the candidate via e-mail or phone. A list containing the names of all candidates nominated will be posted in the SILAK-SILAB Foundation's website and e-mailed to the e-groups. Each voting-member may cast a vote for up to 5 candidates by sending an e-mail to the designated e-mail address below. A voting-member can cast only one vote for each candidate.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Officers;
