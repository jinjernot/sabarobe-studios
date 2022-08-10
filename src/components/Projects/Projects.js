import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import cholo from "../../Assets/Projects/cholo.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {

  return (
    <Container fluid className="project-section">
  <Particle />
      <Container>
        <h1 className="project-heading">
        <strong>Proyectos</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cholo}
              isBlog={false}
              title="Pixel Homies"
              description="Pixel Homies es una coleccion de 1000 personajes coleccionables inspirados en la cultura mexicana con escenas clasicas de Guadalajara, Jalisco. Cada Pixel Homie fue generado algoritmicamente y cuentan con mas de 200 distintas variantes las cuales fueron hechas a mano, pixel por pixel."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tokenización Inmobiliaria (Coming soon)"
              description="Realizamos la tokenización para tus inmuebles."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NFTools (Coming soon)"
              description="Herramientas para colecciones de NFTs generativas con las cuales puedes randomizar los atributos de tus personajes o arte."
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
