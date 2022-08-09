import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

import {
  AiOutlineTwitter,
} from "react-icons/ai";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px"}}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px"}}>
                <strong>Quienes somos?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
                <strong>Conoce al equipo</strong>
            </h1>
        <Row>
          <Col>
            <p>
            <h3 className="team-name">
            <strong>David Villarreal</strong>
            </h3>
                Senior Developer
                  <br />
                  <a
                    href="https://twitter.com/Sabarobe"
                    target="_blank"
                    rel="noreferrer"
                    className="about-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>

                <br />
            </p>
          </Col>

          <Col>
          <p>
          <h3 className="team-name">
          <strong>Jorge Luis Gomez</strong>
          </h3>
              Senior Developer
                <br />
                <a
                  href="https://twitter.com/Sabarobe"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icons"
                >
                  <AiOutlineTwitter />
                </a>

              <br />
          </p>
          </Col>
        </Row>

        <Row>
          <Col>
          <p>
          <h3 className="team-name">
          <strong>Gilberto Garcia</strong>
          </h3>
              Senior Developer
                <br />
                <a
                  href="https://twitter.com/Sabarobe"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icons"
                >
                  <AiOutlineTwitter />
                </a>

              <br />
          </p>
          </Col>

          <Col>
          <p>
          <h3 className="team-name">
          <strong>Asdrubal Nuño</strong>
          </h3>
              Senior Developer
                <br />
                <a
                  href="https://twitter.com/Sabarobe"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icons"
                >
                  <AiOutlineTwitter />
                </a>

              <br />
          </p>
          </Col>
        </Row>

        <Row>
          <Col>
          <p>
          <h3 className="team-name">
          <strong>Marlon Jimenez</strong>
          </h3>
              Senior Developer
                <br />
                <a
                  href="https://twitter.com/Sabarobe"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              <br />
              <br />
          </p>
          </Col>
        </Row>


      </Container>
    </Container>
  );
}

export default About;
