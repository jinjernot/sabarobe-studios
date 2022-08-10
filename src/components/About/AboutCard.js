import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Somos un equipo de desarrolladores y artistas mexicanos interesados en contribuir al ecosistema de la web 3.0 en Mexico, nuestra meta es continuar construyendo y creando comunidad con todos nuestros amigos y seguidores.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
