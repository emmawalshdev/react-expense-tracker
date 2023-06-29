import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //pull out array elements & get max

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
            <ChartBar //for each month
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum} // value of month with max value
              label={dataPoint.label}
            />
            ))}
        </div>
    )
}

export default Chart;