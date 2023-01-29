import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterChart = ({ labels, data, backgroundColor }) => {
  return (
    <Scatter
      options={options}
      data={{
        labels,
        datasets: [
          {
            data,
            backgroundColor,
          },
        ],
      }}
    />
  );
};

export default ScatterChart;
