import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
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
        label: "대중성",
        data: [60, 30, 60, 40, 30, 40, 30],
        backgroundColor: "aqua",
        borderColor: "aqua",
        pointBorderColor: "aqua",
        tension: 0.4,
        pointRadius: 1,
        pointHoverRadius: 1,
      },
      {
        label: " 성장성",
        data: [40, 20, 10, 60, 30, 50, 20],
        backgroundColor: "yellow",
        borderColor: "yellow",
        pointBorderColor: "yellow",
        tension: 0.4,
        pointRadius: 1,
        pointHoverRadius: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
    plugins: {
      animation: {
        duration: 1000,
      },
      legend: {
        position: "top",
        align: "end",
      },
    },
  };
  return (
    <SubInfoItemBlock>
      <Line data={data} options={options} />
    </SubInfoItemBlock>
  );
};

export default LineChart;

const SubInfoItemBlock = styled.div`
  display: flex;

  background-color: white;
  border-radius: 3%;
  .contents {
    h2 {
      margin: 0;
    }
  }
`;
