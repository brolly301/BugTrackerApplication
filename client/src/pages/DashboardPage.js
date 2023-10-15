import React from "react";
import StatusPieChart from "../components/Dashboard/Charts/StatusPieChart";
import PriorityPieChart from "../components/Dashboard/Charts/PriorityPieChart";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <StatusPieChart />
      <PriorityPieChart />
    </div>
  );
}
