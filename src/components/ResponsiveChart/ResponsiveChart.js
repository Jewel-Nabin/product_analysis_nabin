import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ResponsiveChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, []);
    return (
        <div style={{ width: 500, height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chart}
                >
                    <CartesianGrid/>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="investment"/>
                    <Area dataKey="revenue"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResponsiveChart;