import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return <Line data={chartData}options={{responsive: true,  scales: {
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

export default LineChart;