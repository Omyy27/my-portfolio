import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { UilEnvelope  } from '@iconscout/react-unicons'

const Header = () => {
  return (
    <>
      <Navbar bg="transpartent" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="mailto:omovisolutions@gmail.com" className="mx-2"><UilEnvelope  /> <span className="email-text">omovisolutions@gmail.com</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#resume">Resume</Nav.Link> 
              <Nav.Link href="#works">Works</Nav.Link >
              <Nav.Link href="#contact">Contact</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
