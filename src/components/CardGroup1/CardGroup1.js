import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card1 from '../Card1/Card1';
import './CardGroup1.css';

const CardGroup1 = () => {
    const products = [
        { name: '-KATE JONSON', says: "I believe it's the organic foods and quality of the natural ingredients that help me feel this great." },
        { name: '-ANUSHA SHETTY', says: "I recently bought VEGANIC'S RASAM POWDER. All the spices in the powder were perfectly blend. After adding it, my rasam instantly had a tangy and delicious taste." },
        { name: '-ALLAN FERNANDES', says: "I have been regular customer of VEGANIC. The masala tea from VEGANIC is one of my favorite products. I start my day with the masala tea as it energizes me and prepares me for my busy day."},
    ];
    return (
        <div className='style-card'>
            <h2>Customer Reviews</h2>
            <CardGroup>
                {
                    products.map(product => <Card1
                        key={product.name}
                        product={product}
                    ></Card1>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup1;