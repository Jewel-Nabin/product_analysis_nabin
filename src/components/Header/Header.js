import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='site-name'>VEGANIC</h1>
            <span>
                <nav className='nav-style'>
                    <Link to='/home'>HOME</Link>
                    <Link to='/reviews'>REVIEWS</Link>
                    <Link to='/dashboard'>DASHBOARD</Link>
                    <Link to='/blogs'>BLOGS</Link>
                    <Link to='/about'>ABOUT</Link>
                </nav>
            </span>
        </div>
    );
};

export default Header;