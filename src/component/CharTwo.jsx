import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

export const ChartTwo = () => {
    const [options, setOptions] = useState({
        title: {
            text: "Grafica lineal",
        },
        data: [
            {
                quarter: "Q1",
                petrol: 200,
                diesel: 100,
            },
            {
                quarter: "Q2",
                petrol: 300,
                diesel: 130,
            },
            {
                quarter: "Q3",
                petrol: 350,
                diesel: 160,
            },
            {
                quarter: "Q4",
                petrol: 400,
                diesel: 200,
            },
        ],
        series: [
            {
                type: "line",
                xKey: "quarter",
                yKey: "petrol",
                yName: "Petrol",
            },
            {
                type: "line",
                xKey: "quarter",
                yKey: "diesel",
                yName: "Diesel",
            },
        ],
    });

    return <AgCharts options={options} style={{ width: '100%', height: '100%' }}/>;
};
