import React from "react";

export default function DashboardTile({ title, data }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{data}</h4>
    </div>
  );
}
