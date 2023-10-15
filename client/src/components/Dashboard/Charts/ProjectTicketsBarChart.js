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
import useProjectContext from "../../../hooks/useProjectContext";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const rgb = () => {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
};

export default function IssuePieChart() {
  const { state } = useProjectContext();

  const data = {
    labels: ["All Projects"], // Set a single "All Projects" label
    datasets: state.map((project) => ({
      label: [project.name],
      data: [project.tickets?.length],
      backgroundColor: [rgb()],
      hoverOffset: 4,
    })),
  };

  // Define a custom tooltip callback function
  const customTooltip = (context) => {
    const label = context.dataset.label;
    const value = context.parsed.y;
    return `Project: ${label}, Tickets: ${value}`;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Project Tickets Bar Chart</h2>
      <Bar
        data={data}
        width={"100%"}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: customTooltip,
              },
            },
          },
          legend: {
            display: false, // Hide the legend
          },
        }}
      />
    </div>
  );
}
