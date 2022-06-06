import React from "react";
import "./MainUI.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Cards = ({ i }) => {
  return (
    <Card className="my-3 rounded">
      <Link to={`/profile/${i.id}`}>
        <Card.Img variant="top" src={i.avatar} />
      </Link>
      <Card.Body>
        <Card.Title>{i.first_name}</Card.Title>
        <Card.Text>
          <div>
            <small>{i.email}</small>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
