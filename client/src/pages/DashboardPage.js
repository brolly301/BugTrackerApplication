import React from "react";
import StatusPieChart from "../components/Dashboard/Charts/StatusPieChart";
import PriorityPieChart from "../components/Dashboard/Charts/PriorityPieChart";
import IssuePieChart from "../components/Dashboard/Charts/IssuePieChart";
import ProjectTicketsBarChart from "../components/Dashboard/Charts/ProjectTicketsBarChart";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <StatusPieChart />
      <PriorityPieChart />
      <IssuePieChart />
      <ProjectTicketsBarChart />
    </div>
  );
}
