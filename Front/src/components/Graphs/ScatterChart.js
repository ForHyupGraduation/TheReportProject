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

const ScatterChart = ({ labels, data, companyName }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [color, setColor] = useState("red");

  useEffect(() => {
    setIsLoading(false);
    const intervalId = setInterval(() => {
      setColor((color) => (color === "red" ? "#33ff33" : "red"));
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  if (!isLoading) {
    const pointBackgroundColors = data.map((point, index) => {
      if (labels[index] === companyName) {
        return color;
      } else {
        return "rgba(255,0,0,0.1)";
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
              pointRadius: 6,
              pointBackgroundColor: pointBackgroundColors,
            },
          ],
        }}
      />
    );
  }
};

export default ScatterChart;
