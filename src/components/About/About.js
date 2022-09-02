import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutTeam from "./AboutTeam";
import Mumf from "../../Assets/Team/Mumf.png";
import Yorch from "../../Assets/Team/Yorch.png";
import Gil from "../../Assets/Team/Gil.png";
import Asdru from "../../Assets/Team/Asdru.png";
import Joe from "../../Assets/Team/Joe.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px"}}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "100px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6rem", paddingBottom: "20px"}}>
                <strong>¿Quienes somos?</strong>
            </h1>
            <p className="home-about-body">
            Somos un equipo de desarrolladores y artistas mexicanos interesados en contribuir al ecosistema de la web 3.0 en Mexico, nuestra meta es continuar construyendo y creando comunidad con todos nuestros amigos y seguidores.
            </p>
          </Col>
        </Row>

            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
                <strong>Conoce al equipo</strong>

            </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="team-card">
            <AboutTeam
              imgPath={Mumf}
              isBlog={false}
              title="David Villarreal"
              description="Full Stack Developer"
            />
          </Col>

          <Col md={6} className="team-card">
            <AboutTeam
              imgPath={Yorch}
              isBlog={false}
              title="Jorge Gómez"
              description="Artista Gráfico / Fotografía"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="team-card">
            <AboutTeam
              imgPath={Gil}
              isBlog={false}
              title="Gilberto García"
              description="Full Stack Developer"
            />
          </Col>

          <Col md={6} className="team-card">
            <AboutTeam
              imgPath={Asdru}
              isBlog={false}
              title="Asdrubal Nuño"
              description="Senior Full Stack Developer / DevOps"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="team-card">
            <AboutTeam
              imgPath={Joe}
              isBlog={false}
              title="Marlon Jiménez"
              description="Project Manager / Social Media"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
