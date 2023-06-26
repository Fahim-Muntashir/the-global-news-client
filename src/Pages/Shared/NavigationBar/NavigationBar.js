import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="my3 bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/category/0">Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}
              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Link>
                  <Button variant="secondary"></Button>
                </Link>
              )}{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
