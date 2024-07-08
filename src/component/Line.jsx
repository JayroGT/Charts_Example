import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export const Line = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Admision',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Desafio',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Personalizado',
        data: [45, 55, 70, 60, 45, 70, 50],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Soluciones',
        data: [85, 79, 60, 51, 36, 25, 10],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
      },
    ]
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className='h-full w-full'>
      <h2>Line Chart with Chart.js</h2>
      <canvas ref={chartContainer} style={{ width: '100%', height: 'full' }} />
    </div>
  );
};

