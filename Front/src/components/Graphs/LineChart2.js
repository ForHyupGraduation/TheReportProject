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
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);

  useEffect(() => {
    const {
      previousFourthQuarter,
      previousThirdQuarter,
      previousSecondQuarter,
      previousQuarter,
    } = revenue;

    const values = [
      previousQuarter,
      previousSecondQuarter,
      previousThirdQuarter,
      previousFourthQuarter,
    ];
    const parsedValues = values.map((value) => {
      if (isNaN(parseInt(value.split(",").join("")))) {
        return 0;
      }
      return parseInt(value.split(",").join(""));
    });

    setFirst(parsedValues[0]);
    setSecond(parsedValues[1]);
    setThird(parsedValues[2]);
    setFourth(parsedValues[3]);
  }, []);

  const data = {
    labels: [1, 2, 3, 4],
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
        min: parseInt(Math.min(first, second, third, fourth)),
        max: parseInt(Math.max(first, second, third, fourth) * 1.2),
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
