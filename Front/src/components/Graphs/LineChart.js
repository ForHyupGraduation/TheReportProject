import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // xais
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, // xais
  LinearScale,
  PointElement
);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        labels: "Scale of the week",
        data: [6, 3, 6, 4, 3, 4, 3],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
      {
        labels: "Scale of the week",
        data: [4, 2, 1, 6, 3, 5, 2],
        backgroundColor: "yellow",
        borderColor: "black",
        pointBorderColor: "yellow",
        tension: 0.4,
      },
    ],
  };

  const options = {
    animation: {
      duration: 0,
    },
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
