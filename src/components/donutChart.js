import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const DonutChart = ({ active, recovered, deceased }) => {
  const canvas = useRef(null);
  useEffect(() => {
    const cfg = {
      type: "doughnut",
      data: {
        labels: ["Active", "Recovered", "Deceased"],
        datasets: [
          {
            label: "Covid 19",
            data: [active, recovered, deceased],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(50,205,50)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    };
    const chart = new Chart(canvas.current.getContext("2d"), cfg);
    return () => chart.destroy();
  });
  return (
    <div className="chartjs-wrapper">
      <canvas ref={canvas} className="chartjs"></canvas>
    </div>
  );
};

export default DonutChart;
