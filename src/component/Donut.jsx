import React from 'react';
import Chart from 'chart.js/auto';

export const Donut = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    };

    const chartContainer = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
        if (chartContainer && chartContainer.current) {
            chartInstance.current = new Chart(chartContainer.current, config);
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [config]);

    return (
        <div>
            <h2>Donut with Chart.js</h2>
            <div style={{ width: '100%', height: '20rem' }}>
                <canvas ref={chartContainer}></canvas>
            </div>
        </div>
    );
};

