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

const LineChart = ({ revenue }) => {
  const {
    previousFourthQuarter,
    previousThirdQuarter,
    previousSecondQuarter,
    previousQuarter,
  } = revenue;

  const first = parseInt(previousQuarter.split(",").join(""));
  const second = parseInt(previousSecondQuarter.split(",").join(""));
  const third = parseInt(previousThirdQuarter.split(",").join(""));
  const fourth = parseInt(previousFourthQuarter.split(",").join(""));

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur"],
    datasets: [
      {
        labels: "Scale of the week",
        data: [first, second, third, fourth],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
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
        min: Math.min(first, second, third, fourth),
        max: Math.max(first, second, third, fourth),
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} style={{ width: "100%" }} />
    </>
  );
};

export default LineChart;
