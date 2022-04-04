import React from 'react';
import CardGroup2 from '../CardGroup2/CardGroup2';
import './Reviews.css';

const Reviews = () => {
    const handleAddtoCart = () => {
        console.log('Clicked');
    }
    return (
        <div className='review-container'>
            <CardGroup2></CardGroup2>
        </div>
    );
};

export default Reviews;