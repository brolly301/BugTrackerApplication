import React from "react";
import Placeholder from "../Placeholder";

export default function PieChartTile({ title, chart, state }) {
  return (
    <div className="pie-chart-tile-container">
      <h1>{title}</h1>
      <hr className="dashboard-tile-hr" />
      {state.length < 1 ? (
        <Placeholder type={"ticket"} buttonText={"submit"} />
      ) : (
        <div>{chart}</div>
      )}
    </div>
  );
}
