import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './upssf-logo.svg';

class Membership extends Component {

    render() {
        return (
            <div className="my-3">
                <h1>UPSSF Membership Form</h1>
                <p>
                    Please download, print and fill out our UPSSF Membership form.
                    The Foundation has a one-time membership fee of $100,
                    which will serve as a donation to the Foundation.
                </p>

                <h3>Mail the Membership Form to:</h3>
                <p>
                    U.P. Silak-Silab Foundation<br/>
                    P.O. Box 5822 Evanston, IL 60204
                </p>
            </div>
        )
    }
}

export default Membership
