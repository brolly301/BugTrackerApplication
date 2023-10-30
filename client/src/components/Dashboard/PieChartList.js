import React from "react";
import PriorityPieChart from "./Charts/PriorityPieChart";
import StatusPieChart from "./Charts/StatusPieChart";
import IssuePieChart from "./Charts/IssuePieChart";
import PieChartTile from "./PieChartTile";
import "../../CSS/Dashboard/PieCharts.css";
import useTicketContext from "../../hooks/useTicketContext";

export default function PieChartList() {
  const { state } = useTicketContext();

  return (
    <div className="pie-chart-list-container">
      <PieChartTile
        state={state}
        title="Tickets by Priority"
        chart={<PriorityPieChart />}
      />
      <PieChartTile
        state={state}
        title="Tickets by Status"
        chart={<StatusPieChart />}
      />
      <PieChartTile
        state={state}
        title="Tickets by Issue Type"
        chart={<IssuePieChart />}
      />
    </div>
  );
}
