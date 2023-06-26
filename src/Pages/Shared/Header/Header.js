import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Withour fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={60}>
          I can be a React component, multiple React components, or just some
          text.HEEEE this is just nt.You Confused;
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="my3 bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Career</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
