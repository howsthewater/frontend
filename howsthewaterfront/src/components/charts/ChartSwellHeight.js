import React from "react";
import { Line } from "react-chartjs-2";

const ChartSwellHeight = () => {
  // const swellHeightForecastQuery = (Enter the gql query here);

  // TEMPORARY DATA FOR CHARTS
  let swellHeightForecastLabel = [
    "10/1",
    "10/2",
    "10/3",
    "10/4",
    "10/5",
    "10/6",
    "10/7",
    "10/8",
    "10/9",
    "10/10"
  ];
  let swellHeightForecastData = [20, 30, 24, 12, 36, 10, 23, 19, 34, 50];
  let chartData = {
    labels: swellHeightForecastLabel,
    datasets: [
      {
        label: "Swell Height Forecast",
        data: swellHeightForecastData,
        fill: false,
        borderWidth: 1,
        borderColor: "#2d728f",
        lineTension: 0
      }
    ]
  };
  return (
    <Line
      data={chartData}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};

export default ChartSwellHeight;
