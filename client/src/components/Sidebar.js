import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Misc/Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        <Link to={"/adminDashboard"} className='sidebar-list-item-link'>
          <li>Dashboard</li>
        </Link>
        <Link className='sidebar-list-item-link'>
          <li>Tickets</li>
        </Link>

        <Link className='sidebar-list-item-link'>
          <li>Projects</li>
        </Link>
        <Link className='sidebar-list-item-link'>
          <li>Create Ticket</li>
        </Link>
        <Link className='sidebar-list-item-link'>
          <li>Create Project</li>
        </Link>
      </ul>
    </div>
  );
}
