import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Navbar, Nav, Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <LinkContainer to="/">
        <Navbar.Brand>U.P. Silak Silab Foundation</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavHashLink smooth to="/#" className="nav-link">
            Home
          </NavHashLink>
          <NavHashLink smooth to="/#mission" className="nav-link">
            Our Mission
          </NavHashLink>
          <NavHashLink smooth to="/#donate" className="nav-link">
            Donate
          </NavHashLink>
          <NavHashLink smooth to="/Scholars/#" className="nav-link">
            Scholars
          </NavHashLink>
          <NavHashLink smooth to="/Officers/#" className="nav-link">
            Board Members
          </NavHashLink>
          <NavHashLink smooth to="/Articles/#" className="nav-link">
            Latest News
          </NavHashLink>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="mailto:info@upssf.org">
            <Icon.Envelope /> info@upssf.org
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
