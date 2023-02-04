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
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          font: {
            size: 20, //this change the font size
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 20, //this change the font size
          },
        },
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
