import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import PorpTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { NavLink, Button, Form, FormGroup, Input, Label } from "reactstrap";
import StatusMessage from "../../Helpers/StatusMessage";

const LoginForm = ({
  isAuthenticated,
  loginUser,
  loading,
  success,
  status,
  removeMessage
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ userName: username, password: password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="col-md-6 col-sm-12">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="mt-5">
            <h3>Login</h3>
          </Label>
        </FormGroup>
        <div className="text-left">
          <FormGroup>
            <Label for="loginUser">User name</Label>
            <Input
              tabIndex={1}
              type="text"
              id="loginUser"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="text-left">
            <Label for="loginPassword">Password</Label>
            <Input
              tabIndex={2}
              type="password"
              id="loginPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="text-center">
            <StatusMessage
              loading={loading}
              success={success}
              status={status}
            />
          </FormGroup>
          <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
            <Button
              tabIndex={3}
              color="primary"
              className="col-md-6 col-sm-12 mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
            <NavLink>
              <Link to="/register">Sign Up</Link>
            </NavLink>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  loginUser: PorpTypes.func.isRequired,
  removeMessage: PorpTypes.func.isRequired
};

export default LoginForm;