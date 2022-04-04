import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, [])
    return (
        <div>
            <p>Charts: {chart.length}</p>
        </div>
    );
};

export default SpecialChart;