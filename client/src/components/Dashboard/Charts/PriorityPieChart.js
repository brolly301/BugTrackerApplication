import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import useTicketContext from "../../../hooks/useTicketContext";
Chart.register(ArcElement, Tooltip, Legend);

export default function PriorityPieChart() {
  const { state } = useTicketContext();

  const low = state.filter((ticket) => ticket.priority === "Low").length;
  const medium = state.filter((ticket) => ticket.priority === "Medium").length;
  const high = state.filter((ticket) => ticket.priority === "High").length;

  const data = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Tickets",
        data: [low, medium, high],
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
      <h2>Priority Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
}
