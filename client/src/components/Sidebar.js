import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Misc/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        <Link to={"/dashboard"} className="sidebar-list-item-link">
          <li>Dashboard</li>
        </Link>
        <Link to={"/allTickets"} className="sidebar-list-item-link">
          <li>All Tickets</li>
        </Link>
        <Link to={"/myTickets"} className="sidebar-list-item-link">
          <li>My Tickets</li>
        </Link>
        <Link to={"/submitTicket"} className="sidebar-list-item-link">
          <li>Submit Ticket</li>
        </Link>
        <Link to={"/allProjects"} className="sidebar-list-item-link">
          <li>All Projects</li>
        </Link>
        <Link to={"/myProjects"} className="sidebar-list-item-link">
          <li>My Projects</li>
        </Link>
        <Link to={"/createProject"} className="sidebar-list-item-link">
          <li>Create Project</li>
        </Link>
        <Link to={"/manageUsers"} className="sidebar-list-item-link">
          <li>Manage Users</li>
        </Link>
      </ul>
    </div>
  );
}
