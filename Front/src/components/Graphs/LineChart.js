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
        labels: "Scale of the week",
        label: "대중성",
        data: [60, 30, 60, 40, 30, 40, 30],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
      {
        labels: "Scale of the week",
        label: " 성장성",
        data: [40, 20, 10, 60, 30, 50, 20],
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
      legend: { display: true },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
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
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px;
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 3%;

  .contents {
    h2 {
      margin: 0;
    }
  }
`;
