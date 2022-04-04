import React from 'react';
import { Card } from 'react-bootstrap';

const Card1 = (props) => {
    const { name, says } = props.product;
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {says}
                </Card.Text>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default Card1;