import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/GSAP-SVG-Animation-404-Error-Milk-Carton.png" alt="" />
            <nav>
                <Link to='/home'>
                    <Button>BAKC TO HOME</Button>
                </Link>
            </nav>
        </div>
    );
};

export default NotFound;