import React, { Component } from "react";
import PropTypes from "prop-types";
import Hero from "../components/hero.js";
import Mission from "../components/mission.js";
import CallToAction from "../components/cta.js";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section>
        <Hero />
        <Mission />
        <CallToAction />
      </section>
    );
  }
}

export default Home;
