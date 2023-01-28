import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // xais
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  LineElement,
  CategoryScale, // xais
  LinearScale,
  PointElement
);

const LineChart = ({ revenue }) => {
  const [xAxis, setXAxis] = useState([]);

  useEffect(() => {
    setXAxis(Object.keys(revenue));
  }, []);

  if (xAxis[0] === "previousFourthQuarter") {
    xAxis[0] = "1분기";
    xAxis[1] = "2분기";
    xAxis[2] = "3분기";
    xAxis[3] = "4분기";
  }
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
    labels: [xAxis[0], xAxis[1], xAxis[2], xAxis[3]],
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
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
