import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './upssf-logo.svg';

class Home extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header upssf-cover">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Fighting Poverty Through Education
                    </p>
                    <p>We are currenlty updating our site!</p>
                    <p>
                        You can email us at <a className="Home-link" href="mailto:info@upssf.org">info@upssf.org</a>
                    </p>
                </header>
            </div>
        )
    }
}

export default Home
