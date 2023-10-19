import React from "react";
import "../../CSS/Dashboard/BarCharts.css";

export default function BarChartTile({ title, chart }) {
  return (
    <div className="bar-chart-tile-container">
      <h1>{title}</h1>
      <hr className="dashboard-tile-hr" />
      <div>{chart}</div>
    </div>
  );
}
