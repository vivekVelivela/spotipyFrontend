import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// BarChart.defaults.scale.gridLines.drawOnChartArea = false;

function BarChart({ chartData} ) 
{
  return <Bar data={chartData} options={{responsive: true,  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {title: {
    display: true,
    align: 'centre',
    text: 'Playlist Followers',
    font: {
      size: 25
    }
}}
}}/>;
}

export default BarChart;