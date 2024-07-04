import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

export const ChartTwoDonut = () => {
  const [options, setOptions] = useState({
    data: [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },
      ], 
    title: {
      text: "Portfolio Composition",
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
      },
    ],
  });

  return <AgCharts options={options} style={{ width: '100%', height: '100%' }} />;
};
