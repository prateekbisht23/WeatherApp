import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      bodyFont: {
        size: window.innerHeight * 0.015,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: window.innerHeight * 0.015,
        },
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: window.innerHeight * 0.015,
        },
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: window.innerHeight * 0.003,
    },
    point: {
      radius: 0,
    },
  },
};

const TemperatureGraph = ({ data }) => {
  const chartData = {
    labels: ['11pm', '12pm', '1pm', '2pm', '3pm', '4pm'],
    datasets: [
      {
        fill: true,
        data: data || [18, 19, 20, 21, 20, 22],
        borderColor: 'rgba(255, 196, 87, 1)',
        backgroundColor: 'rgba(255, 196, 87, 0.1)',
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default TemperatureGraph;