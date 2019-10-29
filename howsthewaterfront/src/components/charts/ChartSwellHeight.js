import React from "react";
import { Line } from "react-chartjs-2";

const ChartSwellHeight = props => {
  // const swellHeightForecastQuery = (Enter the gql query here);
  const dataSet = props.dataSet;

  let swellHeightForecastLabel = [];
  dataSet.forEach(set => {
    var labelTime = new Date(set.time)
      .getHours()
      .toString()
      .concat(":00");
    swellHeightForecastLabel.push(labelTime);
  });

  let swellHeightForecastData = [];
  dataSet.forEach(set => {
    swellHeightForecastData.push(set.swellHeight[0].value);
  });

  let chartData = {
    labels: swellHeightForecastLabel,
    datasets: [
      {
        label: "Swell Height (meters)",
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
