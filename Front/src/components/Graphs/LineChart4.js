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

const LineChart1 = ({ revenue }) => {
  const {
    previousFourthQuarter,
    previousThirdQuarter,
    previousSecondQuarter,
    previousQuarter,
  } = revenue;
  const first = Number(previousQuarter.split(",").join(""));
  const second = Number(previousSecondQuarter.split(",").join(""));
  const third = Number(previousThirdQuarter.split(",").join(""));
  const fourth = Number(previousFourthQuarter.split(",").join(""));

  const data = {
    labels: ["1분기?", "2분기?", "3분기?", "4분기?"],
    datasets: [
      {
        labels: "Scale of the week",
        data: [fourth, third, second, first],
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
        min: first * 0.99,
        max: fourth * 1.009,
      },
    },
  };

  return <Line data={data} options={options} style={{ width: "100%" }} />;
};

export default LineChart1;
