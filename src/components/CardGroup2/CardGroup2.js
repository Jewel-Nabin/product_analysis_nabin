import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';
import './CardGroup2.css';

const CardGroup2 = () => {
    const products = [
        {name: '-PALLAVI SHARMA', says: "I hav been a loyal customer and I buy a lot of VAGANIC products. I recently tried their VAGANIC Biryani Masala. My Biryani tasted delicious with VEGANIC extra touch. Definitely going to add that to my grocerry list.", ratings: 4},
        { name: '-Dr. RUTUJA', says: "VEGANIC'S Dal, is actually unpolished and worth the price. Same taste but more healthy. Glad to have bought this dal from VEGANIC.", ratings: 4.5 },
        { name: '-JEWEL NABIN', says: "I love VEGANIC'S behaviours and services. Their all products touch to my heart.", ratings: 3 },
        { name: '-KATE JONSON', says: "I believe it's the organic foods and quality of the natural ingredients that help me feel this great.", ratings: 5 },
        { name: '-ANUSHA SHETTY', says: "I recently bought VEGANIC'S RASAM POWDER. All the spices in the powder were perfectly blend. After adding it, my rasam instantly had a tangy and delicious taste.", ratings: 3.5 },
        { name: '-ALLAN FERNANDES', says: "I have been regular customer of VEGANIC. The masala tea from VEGANIC is one of my favorite products. I start my day with the masala tea as it energizes me and prepares me for my busy day.", ratings: 4 },
    ];
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2
                        key={product.name}
                        product={product}
                    ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;