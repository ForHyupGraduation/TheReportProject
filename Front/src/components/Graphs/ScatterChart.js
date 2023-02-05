import React, { useEffect, useState } from "react";
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
      beginAtZero: true,
    },
  },
};

const ScatterChart = ({ labels, data }) => {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (!isLoading) {
    const pointBackgroundColors = data.map((point, index) => {
      if (labels[index] === "밸로프") {
        return "red";
      } else {
        return "rgb(192,192,192)";
      }
    });

    return (
      <Scatter
        options={options}
        data={{
          labels,
          datasets: [
            {
              data,
              pointBackgroundColor: pointBackgroundColors,
            },
          ],
        }}
      />
    );
  }
};

export default ScatterChart;
