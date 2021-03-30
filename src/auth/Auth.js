import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Test from "./Test";
import { Container, Row, Col } from "reactstrap";

const Auth = (props) => {
  return (
    <Container className="auth-container">
      <Row>
        {<Col md="4"></Col>}
        <Col md="4" className="login-col">
          <Login updateToken={props.updateToken} />
          &nbsp;
          <Test updateToken={props.updateToken} />
        </Col>
        <Col md="4"></Col>
      </Row>
    </Container>
  );
};
export default Auth;
