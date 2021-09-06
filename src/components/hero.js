import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import logo from "../images/upssf-logo.svg";
import { HashLink } from "react-router-hash-link";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container pt-5">
        <h1 className="text-center">Fighting Poverty Through Education</h1>
        <div className="pt-4">
          <img className="upssf-logo mx-auto d-block" src={logo} alt="logo" />
        </div>

        <div className="pt-4 hero-text">
          <p>
            Welcome to the University of the Philippines SILAK-SILAB Foundation,
            a non-profit, tax-exempt Section 501(c)(3) public charity
            organization incorporated in Illinois, USA.
          </p>
        </div>

        <div className="pt-4 text-center">
          <HashLink smooth to="/#donate">
            <Button className="hero-btn-donate py-2 px-4" variant="primary">
              Make a Donation Today!
            </Button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
