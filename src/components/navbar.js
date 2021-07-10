import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Navbar, Nav, Button, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>U.P. Silak Silab Foundation</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Donate">
                            <Nav.Link>Donate</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Mission">
                            <Nav.Link>Mission Statement</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Officers">
                            <Nav.Link>Officers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Scholars">
                            <Nav.Link>Scholars</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Articles">
                            <Nav.Link>Articles</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="mailto:info@upssf.org"><Icon.Envelope /> info@upssf.org</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </header >
    )
}

export default NavBar;
