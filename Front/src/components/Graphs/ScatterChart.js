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
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterChart = ({ labels, data, backgroundColor }) => {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  console.log(data);

  if (!isLoading) {
    console.log(labels, data);
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
  }
};

export default ScatterChart;
