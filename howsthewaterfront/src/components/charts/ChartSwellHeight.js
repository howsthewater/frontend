import React from "react";
import { Line } from "react-chartjs-2";

const ChartSwellHeight = props => {
  // const swellHeightForecastQuery = (Enter the gql query here);
  //const dataSet = props.dataSet;
  const dataSet = [
    {
      swellHeight: [{ value: "2.04", __typename: "swellHeight" }],
      waterTemperature: [{ value: "8.31", __typename: "waterTemperature" }],
      windSpeed: [{ value: "0.87", __typename: "windSpeed" }],
      time: "2019-10-21T09:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "2.02", __typename: "swellHeight" }],
      waterTemperature: [{ value: "8.21", __typename: "waterTemperature" }],
      windSpeed: [{ value: "0.94", __typename: "windSpeed" }],
      time: "2019-10-21T10:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "2.01", __typename: "swellHeight" }],
      waterTemperature: [{ value: "8.11", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.02", __typename: "windSpeed" }],
      time: "2019-10-21T11:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.99", __typename: "swellHeight" }],
      waterTemperature: [{ value: "8", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.09", __typename: "windSpeed" }],
      time: "2019-10-21T12:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.98", __typename: "swellHeight" }],
      waterTemperature: [{ value: "7.92", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.34", __typename: "windSpeed" }],
      time: "2019-10-21T13:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.96", __typename: "swellHeight" }],
      waterTemperature: [{ value: "7.84", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.58", __typename: "windSpeed" }],
      time: "2019-10-21T14:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.95", __typename: "swellHeight" }],
      waterTemperature: [{ value: "7.76", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.83", __typename: "windSpeed" }],
      time: "2019-10-21T15:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.94", __typename: "swellHeight" }],
      waterTemperature: [{ value: "12.04", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.57", __typename: "windSpeed" }],
      time: "2019-10-21T16:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.93", __typename: "swellHeight" }],
      waterTemperature: [{ value: "16.31", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.3", __typename: "windSpeed" }],
      time: "2019-10-21T17:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.92", __typename: "swellHeight" }],
      waterTemperature: [{ value: "20.59", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.04", __typename: "windSpeed" }],
      time: "2019-10-21T18:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.93", __typename: "swellHeight" }],
      waterTemperature: [{ value: "21.38", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.14", __typename: "windSpeed" }],
      time: "2019-10-21T19:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.94", __typename: "swellHeight" }],
      waterTemperature: [{ value: "22.18", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.23", __typename: "windSpeed" }],
      time: "2019-10-21T20:00:00+00:00",
      __typename: "hours"
    },
    {
      swellHeight: [{ value: "1.95", __typename: "swellHeight" }],
      waterTemperature: [{ value: "22.97", __typename: "waterTemperature" }],
      windSpeed: [{ value: "1.33", __typename: "windSpeed" }],
      time: "2019-10-21T21:00:00+00:00",
      __typename: "hours"
    }
  ];
  console.log(":: CHART SWELL HEIGHT IS :: " + dataSet.length);
  console.log(":: CHART SWELL HEIGHT DATASET IS ::" + JSON.stringify(dataSet));

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
