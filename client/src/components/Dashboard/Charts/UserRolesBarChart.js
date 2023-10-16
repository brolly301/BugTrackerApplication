import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { rgb } from "../../../functions/randomRGB";
import useUserContext from "../../../hooks/useUserContext";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function UserRolesBarChart() {
  const { state } = useUserContext();

  const roleLengths = [
    state?.allUsers?.filter((user) => user.role === "Admin").length,
    state?.allUsers?.filter((user) => user.role === "Project Manager").length,
    state?.allUsers?.filter((user) => user.role === "Developer").length,
    state?.allUsers?.filter((user) => user.role === "Test Engineer").length,
    state?.allUsers?.filter((user) => user.role === "Support").length,
  ];

  const data = {
    labels: [
      "Admin",
      "Project Manager",
      "Developer",
      "Test Engineer",
      "Support",
    ],
    datasets: [
      {
        label: ["Users per Role"],
        data: roleLengths,
        backgroundColor: rgb(),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Project Tickets Bar Chart</h2>
      <Bar data={data} width={"100%"} />
    </div>
  );
}
