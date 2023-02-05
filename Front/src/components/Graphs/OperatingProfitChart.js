import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const OperatingProfit = ({ operating }) => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);
  useEffect(() => {
    setFirst(operating.operatingOneYearsAgo);
    setSecond(operating.operatingTwoYearsAgo);
    setThird(operating.operatingThreeYearsAgo);
    setFourth(operating.operatingFourYearsAgo);
  }, []);

  const data = {
    labels: [2019, 2020, 2021, 2022],
    datasets: [
      {
        lable: "단위 : %",
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
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default OperatingProfit;
