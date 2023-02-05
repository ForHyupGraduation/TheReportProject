import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const PostPerDayChart = ({ postPerDayData }) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [recent, setRecent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setRecent(postPerDayData.slice(0, 4));
    try {
      if (recent) {
        setFirst(recent[0].postPerDay);
        setSecond(recent[1].postPerDay);
        setThird(recent[2].postPerDay);
        setFourth(recent[3].postPerDay);
      }
    } catch {}
    setIsLoading(false);
  }, [isLoading]);

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
        max: Math.max(first, second, third, fourth),
      },
    },
  };

  if (!isLoading) {
    console.log(recent[0].companyDate);
    return (
      <>
        <Line data={data} options={options} />
      </>
    );
  }
};

export default PostPerDayChart;
