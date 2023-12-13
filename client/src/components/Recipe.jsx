import React from 'react';
import Card from 'react-bootstrap/Card';

const Recipe = ({ id, image, name }) => {
  return (
    <Card style={{ width: 200, margin: 10 }}>
      <a href={`/recipe/${id}`}>
        <Card.Img src={image} />
      </a>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
