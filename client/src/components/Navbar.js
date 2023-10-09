import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../CSS/Misc/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-list-item">Home</li>
        <li className="navbar-list-item">Profile</li>
        <li className="navbar-list-item">Dashboard</li>
        <li className="navbar-list-item">Logout</li>
      </ul>
      <div style={{ display: "none" }}>
        <Outlet />
      </div>
    </div>
  );
}
