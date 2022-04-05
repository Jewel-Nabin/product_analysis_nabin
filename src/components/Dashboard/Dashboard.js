import React from 'react';
import ResponsiveChart from '../ResponsiveChart/ResponsiveChart';
import SpecialChart from '../SpecialChart/SpecialChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dash-container'>
            <div className='special'>
                <h5>Month Wise Sell</h5>
                <SpecialChart></SpecialChart>
            </div>
            <div className='responsive'>
                <h5>Investment VS Revenue</h5>
                <ResponsiveChart></ResponsiveChart>
            </div>
        </div>
    );
};

export default Dashboard;