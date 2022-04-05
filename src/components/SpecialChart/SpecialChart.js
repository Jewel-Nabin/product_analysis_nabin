import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, []);
    return (
        <div>
            <LineChart width={500} height={300} data={chart}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default SpecialChart;