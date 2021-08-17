import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    console.log(props);
    const dataPointValues = props.chartDataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.chartDataPoints.map((item)=>(
                <ChartBar
                    key = {item.label}
                    value = {item.value}
                    maxValue = {totalMaxValue}
                    label = {item.label}
                />
            
            ))}
        </div>

    );
    
    
    };

export default Chart;