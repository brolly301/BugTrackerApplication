import React from "react";
import DashboardTileList from "../components/Dashboard/DashboardTileList";
import HeaderPanel from "../components/HeaderPanel";
import PieChartList from "../components/Dashboard/PieChartList";
import BarChartList from "../components/Dashboard/BarChartList";

export default function DashboardPage() {
  return (
    <HeaderPanel title={"Dashboard"}>
      <DashboardTileList />
      <BarChartList />
      <PieChartList />
    </HeaderPanel>
  );
}
