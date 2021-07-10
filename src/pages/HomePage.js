import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./upssf-logo.svg";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header upssf-cover">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Fighting Poverty Through Education</p>
          <p>
            Welcome to the University of the Philippines SILAK-SILAB Foundation,
            a non-profit, tax-exempt Section 501(c)(3) public charity
            organization incorporated in Illinois, USA. It believes in the value
            of education and is dedicated to improving the lives of
            disadvantaged young individuals by providing educational assistance
            such as scholarships, tuition assistance, and stipends, for
            qualified students. The Foundation’s mission is to liberate poor but
            deserving students from poverty through access to educatio
          </p>
          <p>
            Contact us at{" "}
            <a className="Home-link" href="mailto:info@upssf.org">
              info@upssf.org
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
