import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Sabarobe Studios</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
