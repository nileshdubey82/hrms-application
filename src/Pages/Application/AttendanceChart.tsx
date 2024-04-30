import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { DefaultChartsLegend } from '@mui/x-charts';

const uData = [70, 70, 30, 40, 50, 60, 70];
const pData = [10, 20, 80, 40, 50, 20, 70];
const nData = [10, 50, 30, 40, 90, 60, 10];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function StackedBarChart() {
  return (
    <BarChart
      width={650}
      height={430}
      series={[
        { data: pData, label: "pv", id: "pvId", stack: "total" },
        { data: uData, label: "uv", id: "uvId", stack: "total" },
        { data: nData, label: "nv", id: "nvId", stack: "total" },
      ]}
      xAxis={[
        {
          data: xLabels,
          scaleType: "band",
          tickSize: 0,
          stroke: "0",
          categoryGapRatio: 0.8,
          barGapRatio: 0.6,
        },
      ]}
      yAxis={[
        {
          tickSize: 0,
        },
      ]}
      colors={["#7152F3", "#FEB85B", "#F45B69"]}
      sx={{ stroke: 0, strokeWidth: 0, width: 0, lineHeight: 0 }}
      markGap={1}
      itemGap={10}
      slotProps={{
        bar: {
          clipPath: `inset(0px 0px 10px 0px round 10px 10px 10px 10px)`,
        },
        
      }}
      DefaultChartsLegend={
        {
          hidden:true
        }
      }
    />
  );
}
