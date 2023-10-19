import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import useTicketContext from "../../../hooks/useTicketContext";
import { rgb } from "../../../functions/randomRGB";
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
        backgroundColor: ["#D2CD59", "#E5973C", "#E30E27"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        width={"380"}
        height={"270"}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
    </div>
  );
}
