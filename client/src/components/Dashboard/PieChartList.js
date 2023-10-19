import React from "react";
import PriorityPieChart from "./Charts/PriorityPieChart";
import StatusPieChart from "./Charts/StatusPieChart";
import IssuePieChart from "./Charts/IssuePieChart";
import PieChartTile from "./PieChartTile";
import "../../CSS/Dashboard/PieCharts.css";

export default function PieChartList() {
  return (
    <div className="pie-chart-list-container">
      <PieChartTile title="Tickets by Priority" chart={<PriorityPieChart />} />
      <PieChartTile title="Tickets by Status" chart={<StatusPieChart />} />
      <PieChartTile title="Tickets by Issue Type" chart={<IssuePieChart />} />
    </div>
  );
}
