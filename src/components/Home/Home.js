import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardGroup1 from '../CardGroup1/CardGroup1';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='header-container'>
                <div className="title-container">
                    <h5 className='title'>Healthy Life With</h5>
                    <h1 className='moral-title'>Nature Organic</h1>
                    <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten raw.</p>
                    <Button>SHOP NOW</Button>
                </div>
                <div className="img-container">
                    <img src="https://img3.exportersindia.com/product_images/bc-full/dir_151/4504008/vegetables-1487919651-2735295.jpeg" alt="" />
                </div>
            </div>
            <CardGroup1></CardGroup1>
                <nav>
                <Link to='/reviews'>
                    <Button>See All Reviews</Button>
                    </Link>
                </nav>
        </div>
    );
};

export default Home;