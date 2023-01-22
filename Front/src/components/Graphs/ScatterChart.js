import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
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

const ScatterChart = ({ label, data, backgroundColor }) => {
    return (
        <Scatter options={options} data={{
            datasets: [
                {
                    label,
                    data,
                    backgroundColor
                }
            ]
        }} />
    )
}






export default ScatterChart;