import React from "react";
import { Line } from "react-chartjs-2";

const ChartWindSpeed = props => {
  // const windSpeedForecastQuery = (Enter the gql query here);

  // TEMPORARY DATA FOR CHARTS
  const dataSet = props.dataSet;

  let windSpeedForecastLabel = [];
  dataSet.forEach(set => {
    var labelTime = new Date(set.time)
      .getHours()
      .toString()
      .concat(":00");
    windSpeedForecastLabel.push(labelTime);
  });

  let windSpeedForecastData = [];
  dataSet.forEach(set => {
    windSpeedForecastData.push(set.windSpeed[0].value);
  });
  let chartData = {
    labels: windSpeedForecastLabel,
    datasets: [
      {
        label: "Wind Speed Forecast",
        data: windSpeedForecastData,
        fill: false,
        borderWidth: 1,
        borderColor: "#2d728f"
        // lineTension: 0
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

export default ChartWindSpeed;
