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
              paddingTop: "140px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6rem", paddingBottom: "20px"}}>
                <strong>¿Quienes somos?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "90px", paddingBottom: "90px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
                <strong>Conoce al equipo</strong>
                <br />
                <br />
                <br />
            </h1>
        <Row>
          <Col>
            <p>
            <h3 className="team-name">
            <strong>David Villarreal</strong>
            </h3>
                Full Stack Developer
                  <br />
                  <a
                    href="https://twitter.com/mumfordvs"
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
              Artista gráfico/Fotografía
                <br />
                <a
                  href="https://twitter.com/Yorchhh"
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
              Full Stack Developer
                <br />
                <a
                  href="https://twitter.com/norindes"
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
              Senior Full Stack Developer/DevOps
                <br />
                <a
                  href="https://twitter.com/azdcorp"
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
              Proyect Manager/Social Media
                <br />
                <a
                  href="https://twitter.com/JSabarobe"
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
