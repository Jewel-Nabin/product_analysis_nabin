import React from 'react';
import { Card } from 'react-bootstrap';

const Card1 = (props) => {
    const { name, says, ratings } = props.product;
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {says}
                </Card.Text>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                Ratings: {ratings}
            </Card.Footer>
        </Card>
    );
};

export default Card1;