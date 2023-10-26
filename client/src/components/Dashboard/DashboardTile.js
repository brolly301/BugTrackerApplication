import React from "react";
import "../../CSS/Dashboard/DashboardTiles.css";
import { Link } from "react-router-dom";

export default function DashboardTile({ title, data, linkText, link, color }) {
  const filter =
    title === "Open Tickets"
      ? "Open"
      : title === "In Progress Tickets"
      ? "In Progress"
      : null;

  return (
    <div
      className="dashboard-tile-container"
      style={{ backgroundColor: `${color}` }}>
      <h3>{title}</h3>
      <hr className="dashboard-tile-hr" />
      <div className="dashboard-number-container">
        <h4>{data}</h4>
      </div>
      <hr className="dashboard-tile-hr" />
      <Link
        style={{ textDecoration: "none" }}
        state={{ filter: filter }}
        to={`${link}`}>
        <p className="dashboard-tile-view">View {linkText}</p>
      </Link>
    </div>
  );
}
