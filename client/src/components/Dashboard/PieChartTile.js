import React from "react";

export default function PieChartTile({ title, chart }) {
  return (
    <div className="pie-chart-tile-container">
      <h1>{title}</h1>
      <hr className="dashboard-tile-hr" />
      <div>{chart}</div>
    </div>
  );
}
