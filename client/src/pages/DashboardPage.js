import React from "react";
import DashboardTileList from "../components/Dashboard/DashboardTileList";
import HeaderPanel from "../components/HeaderPanel";
import PieChartList from "../components/Dashboard/PieChartList";
import BarChartList from "../components/Dashboard/BarChartList";

export default function DashboardPage() {
  return (
    <HeaderPanel title={"Dashboard"}>
      <div style={{ marginTop: "10px" }}>
        <DashboardTileList />
        <PieChartList />
        <BarChartList />
      </div>
    </HeaderPanel>
  );
}
