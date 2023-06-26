import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Container className="mx-auto w-25">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="url"
              placeholder="Enter Url"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="accept"
              label="Accept Terms And Condition"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Allready Account <Link to="/login">Login</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
