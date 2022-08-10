import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="home">
        
  <Particle />
        <Container className="home-content">
        <h1 className="heading-name">
                <strong>Sabarobe Studios</strong>
              </h1>
          <Row>
            <Col md={6} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 10 }}>
              
            </Col>
          </Row>

          <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <strong>Construímos el nuevo internet  </strong>
            </h1>
            <p className="home-about-body">
            Ayudamos a las empresas en su estrategia de blockchain, proporcionando los recursos necesarios para tener éxito en el lanzamiento, la creación de comunidades y la monetización.
            Nuestro apoyo y orientación estratégica permite a personas influyentes, marcas y empresas crear microeconomías sostenibles para sus seguidores y comunidades.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong>Siguenos</strong>
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/Sabarobe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/Sabarobe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/Sabarobe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
