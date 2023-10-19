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
        backgroundColor: "#459AE9",
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        width={"600"}
        height={"350"}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
    </div>
  );
}
