import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AuthProvider";

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
    </Container>
  );
};

export default Header;
