import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h2 className="text-center">Login</h2>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Login;
