import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import logo from "../images/upssf-logo.svg";
import { HashLink } from "react-router-hash-link";
import "./hero.css";

function Hero() {
  return (
    <section className="hero mb-5">
      <div className="pt-5 px-5 pt-md-3">
        <h2 className="text-center">Fighting Poverty Through Education</h2>
        <div className="pt-4">
          <img className="upssf-logo mx-auto d-block" src={logo} alt="logo" />
        </div>

        <div className="pt-4 px-xl-5 mx-xl-5 hero-text">
          <p className="lead">
            Welcome to the University of the Philippines SILAK-SILAB Foundation,
            a non-profit, tax-exempt Section 501(c)(3) public charity
            organization incorporated in Illinois, USA.
          </p>
        </div>

        <div className="text-center">
          <HashLink smooth to="/#donate">
            <Button className="hero-btn-donate py-2 px-4 mb-4" variant="primary">
              Make a Donation Today!
            </Button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
