import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "Center", fontSize: "2em", fontWeight: "bold" }}>
        {props.title}
        </Card.Title>
        <br />
        <Card.Text style={{ textAlign: "Center", fontSize: "1.3em"}}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
      
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
