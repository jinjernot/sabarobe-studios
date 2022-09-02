import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              <strong>El futuro de internet ya está aquí</strong>
            </h1>
            <p className="home-about-body">
            Desarrollamos aplicaciones Web a la medida que responden a la estrategia de marketing, seleccionando la mejor herramienta para cada proyecto y aportando un valor añadido incluyendo tecnologia Blockchain, con el objetivo de potenciar los negocios de nuestros clientes en Internet, ya sea con colecciones de NFTs o monetización.
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
