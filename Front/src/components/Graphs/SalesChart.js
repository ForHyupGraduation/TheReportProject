import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const SalesChart = ({ sales }) => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFirst(sales.salesOneYearsAgo);
    setSecond(sales.salesTwoYearsAgo);
    setThird(sales.salesThreeYearsAgo);
    setFourth(sales.salesFourYearsAgo);
    setIsLoading(false);
  }, []);

  const data = {
    labels: [2019, 2020, 2021, 2022],
    datasets: [
      {
        data: [fourth, third, second, first],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      animation: {
        duration: 1000,
      },
      legend: {
        position: "top",
        align: "end",
        display: false,
      },
    },
    scales: {
      y: {
        min: Math.min(first, second, third, fourth),
        max: Math.max(first, second, third, fourth) * 1.2,
      },
    },
  };

  if (!isLoading) {
    return (
      <>
        <Line data={data} options={options} />
      </>
    );
  }
};

export default SalesChart;
