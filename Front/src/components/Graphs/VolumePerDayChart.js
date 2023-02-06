import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

const VolumePerDayChart = ({ volumePerDay }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);

  const recent = useMemo(() => volumePerDay.slice(0, 4), [volumePerDay]);

  useEffect(() => {
    const recentVolume = recent.map((dto) => dto.volumePerDay);
    const dates = recent.map((dto) => dto.companyDate);

    setData({
      labels: dates,
      datasets: [
        {
          data: recentVolume,
          backgroundColor: "aqua",
          borderColor: "black",
          pointBorderColor: "aqua",
          tension: 0.4,
        },
      ],
    });

    setIsLoading(false);
  }, [recent]);

  const minValue = Math.min(...recent.map((dto) => dto.volumePerDay));
  const maxValue = Math.max(...recent.map((dto) => dto.volumePerDay));

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
        min: minValue,
        max: maxValue,
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

export default VolumePerDayChart;
