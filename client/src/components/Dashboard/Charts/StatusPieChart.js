import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import useTicketContext from "../../../hooks/useTicketContext";
import { rgb } from "../../../functions/randomRGB";
Chart.register(ArcElement, Tooltip, Legend);

export default function StatusPieChart() {
  const { state } = useTicketContext();

  const open = state.filter((ticket) => ticket.status === "Open").length;
  const inProgress = state.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;
  const closed = state.filter((ticket) => ticket.status === "Closed").length;

  const data = {
    labels: ["Open", "In Progress", "Closed"],
    datasets: [
      {
        label: "Tickets",
        data: [open, inProgress, closed],
        backgroundColor: [rgb(), rgb(), rgb()],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2>Status Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
}
