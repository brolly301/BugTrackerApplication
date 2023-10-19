import React from "react";
import "../../CSS/Dashboard/DashboardTiles.css";

export default function DashboardTile({ title, data, link, color }) {
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
      <p className="dashboard-tile-view">View {link}</p>
    </div>
  );
}
