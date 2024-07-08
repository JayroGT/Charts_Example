import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

export const ChartTwo = () => {
    const [options, setOptions] = useState({
        title: {
            text: "Grafica lineal",
        },
        data: [
            { 
                date: "January", 
                admision: 200, 
                desafio: 150, 
                personalizado: 300, 
                soluciones: 450 
            },
            { 
                date: "February", 
                admision: 220, 
                desafio: 180, 
                personalizado: 330, 
                soluciones: 470 
            },
            { 
                date: "March", 
                admision: 240, 
                desafio: 210, 
                personalizado: 360, 
                soluciones: 490 
            },
            { 
                date: "April", 
                admision: 260, 
                desafio: 230, 
                personalizado: 390, 
                soluciones: 510 
            },
            { 
                date: "May", 
                admision: 280, 
                desafio: 250, 
                personalizado: 420, 
                soluciones: 530
            },
        ],
        series: [
            {
                type: "line",
                xKey: "date",
                yKey: "admision",
                yName: "Admision",
            },
            {
                type: "line",
                xKey: "date",
                yKey: "desafio",
                yName: "Desafio",
            },
            {
                type: "line",
                xKey: "date",
                yKey: "personalizado",
                yName: "Personalizado",
            },
            {
                type: "line",
                xKey: "date",
                yKey: "soluciones",
                yName: "Soluciones",
            },
        ],
    });

    return <AgCharts options={options} style={{ width: '100%', height: '100%' }} />;
};
