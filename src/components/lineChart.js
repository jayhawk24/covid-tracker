import React from "react";

import { Line } from "react-chartjs-2";

const LineChart = ({ last7days }) => {
  const data = {
    labels: ["Day 7", "Day 6", "Day 5", "Day 4", "Day 3", "Day 2", "Day 1"],
    datasets: [
      {
        label: "Recovered",
        data: last7days.map((daily) => daily.dailyrecovered),
        fill: true,
        backgroundColor: "rgba(0,100,0,0.2)",
        borderColor: "rgba(0,100,0,1)",
      },
      {
        label: "Deceased",
        data: last7days.map((daily) => daily.dailydeceased),
        fill: true,
        backgroundColor: "rgba(80,80,80,0.2)",
        borderColor: "#808080",
      },
      {
        label: "Active",
        data: last7days.map((daily) => daily.dailyconfirmed),
        fill: true,
        backgroundColor: "rgba(0,0,255,0.2)",
        borderColor: "#0000ff",
      },
    ],
  };
  return (
    <div className="LineChart">
      <Line data={data} />
    </div>
  );
};
export default LineChart;
