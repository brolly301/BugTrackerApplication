import React from "react";
import "../../CSS/Dashboard/BarCharts.css";
import Placeholder from "../Placeholder";

export default function BarChartTile({ title, chart, state }) {
  return (
    <div className="bar-chart-tile-container">
      <h1>{title}</h1>
      <hr className="dashboard-tile-hr" />
      {!state ? (
        <Placeholder
          type={"ticket"}
          buttonText={"submit"}
          link={"/submitTicket"}
        />
      ) : (
        <div>{chart}</div>
      )}
    </div>
  );
}
