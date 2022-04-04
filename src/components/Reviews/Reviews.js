import React from 'react';
import CardGroup2 from '../CardGroup2/CardGroup2';

const Reviews = () => {
    const handleAddtoCart = () => {
        console.log('Clicked');
    }
    return (
        <div>
            <h3>This is Reviews</h3>
            <CardGroup2></CardGroup2>
        </div>
    );
};

export default Reviews;