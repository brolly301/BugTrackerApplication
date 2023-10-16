import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import useTicketContext from "../../../hooks/useTicketContext";
import { rgb } from "../../../functions/randomRGB";
Chart.register(ArcElement, Tooltip, Legend);

export default function IssuePieChart() {
  const { state } = useTicketContext();

  const bug = state.filter((ticket) => ticket.issueType === "Bug").length;
  const featureRequest = state.filter(
    (ticket) => ticket.issueType === "Feature Request"
  ).length;
  const designRequest = state.filter(
    (ticket) => ticket.issueType === "Design Request"
  ).length;

  const data = {
    labels: ["Bug", "Feature Request", "Design Request"],
    datasets: [
      {
        label: "Tickets",
        data: [bug, featureRequest, designRequest],
        backgroundColor: [rgb(), rgb(), rgb()],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2>Issue Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
}
