import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";

export const ChartTwoDonut = ({data}) => {
  const [options, setOptions] = useState({
    title: {
      text: "Portfolio Composition",
    },
    series: [],
  });
  useEffect(() => {
    const limitedData = data.slice(0, 1); // Limitar al primer objeto para no duplicar
    const seriesConfig = limitedData.map((dataItem) => ({
      type: "donut",
      calloutLabelKey: Object.keys(dataItem)[0], 
      angleKey: Object.keys(dataItem)[1],
      innerRadiusRatio: 0.7,
    }));

    setOptions(prevOptions => ({
      ...prevOptions,
      series: seriesConfig,
      data: data, 
    }));
  }, []);

  return <AgCharts 
            options={options} 
            style={
              { 
                width: '100%', 
                height: '100%' 
              }} 
            />;
};
