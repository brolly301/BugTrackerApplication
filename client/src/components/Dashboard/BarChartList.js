import React from "react";
import BarChartTile from "./BarChartTile";
import ProjectTicketsBarChart from "./Charts/ProjectTicketsBarChart";
import UserRolesBarChart from "./Charts/UserRolesBarChart";
import "../../CSS/Dashboard/BarCharts.css";
import useProjectContext from "../../hooks/useProjectContext";
import Placeholder from "../Placeholder";

export default function BarChartList() {
  const { state } = useProjectContext();

  const hasOpenTickets = state?.map((project) =>
    project?.tickets?.some((ticket) => ticket.status === "Open")
  );

  console.log(hasOpenTickets);

  return (
    <div className="bar-chart-list-container">
      <BarChartTile
        title={"Projects by Open Tickets"}
        chart={<ProjectTicketsBarChart />}
        state={hasOpenTickets[0]}
      />
      <div className="bar-chart-tile-container">
        <h1>Users by Role</h1>
        <hr className="dashboard-tile-hr" />
        <div>
          <UserRolesBarChart />
        </div>
      </div>
    </div>
  );
}
