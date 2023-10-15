import React from "react";
import { Pie } from "react-chartjs-2";
import useTicketContext from "../../../hooks/useTicketContext";

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
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
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
