import React from "react";
import BarChartTile from "./BarChartTile";
import ProjectTicketsBarChart from "./Charts/ProjectTicketsBarChart";
import UserRolesBarChart from "./Charts/UserRolesBarChart";
import "../../CSS/Dashboard/BarCharts.css";

export default function BarChartList() {
  return (
    <div className="bar-chart-list-container">
      <BarChartTile
        title={"Projects by Open Tickets"}
        chart={<ProjectTicketsBarChart />}
      />
      <BarChartTile title={"Users by Role"} chart={<UserRolesBarChart />} />
    </div>
  );
}
