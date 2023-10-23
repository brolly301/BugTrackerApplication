import React from "react";
import "../../../../CSS/ManageUsers/UserStatisticsStatTile.css";

export default function UserStatisticStatTile({ title, data }) {
  return (
    <div className="userStats-tile-container">
      <h3>{title}</h3>
      <hr className="userStats-tile-hr" />
      <div className="userStats-number-container">
        <h4>{data || 0}</h4>
      </div>
      <hr className="userStats-tile-hr" />
    </div>
  );
}
