import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function HorizontalBarChart({ chartData } ) 
{
  return <Bar data={chartData} options={{responsive: true, indexAxis: 'y', scales: {
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
    text: 'Track Popularity',
    font: {
      size: 25
    }
}}
}}/>;
}

export default HorizontalBarChart;