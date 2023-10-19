import React from "react";
import StatusPieChart from "../components/Dashboard/Charts/StatusPieChart";
import PriorityPieChart from "../components/Dashboard/Charts/PriorityPieChart";
import IssuePieChart from "../components/Dashboard/Charts/IssuePieChart";
import ProjectTicketsBarChart from "../components/Dashboard/Charts/ProjectTicketsBarChart";
import DashboardTileList from "../components/Dashboard/DashboardTileList";
import UserRolesBarChart from "../components/Dashboard/Charts/UserRolesBarChart";
import HeaderPanel from "../components/HeaderPanel";

export default function DashboardPage() {
  return (
    <HeaderPanel title={"Dashboard"}>
      <DashboardTileList />
      <StatusPieChart />
      <PriorityPieChart />
      <IssuePieChart />
      <ProjectTicketsBarChart />
      <UserRolesBarChart />
    </HeaderPanel>
  );
}
