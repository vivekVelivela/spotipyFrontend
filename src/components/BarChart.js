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
  }
}}/>;
}

export default BarChart;