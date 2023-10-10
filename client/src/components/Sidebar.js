import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Misc/Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        <Link to={"/dashboard"} className='sidebar-list-item-link'>
          <li>Dashboard</li>
        </Link>
        <Link to={"/tickets"} className='sidebar-list-item-link'>
          <li>Tickets</li>
        </Link>

        <Link to={"/projects"} className='sidebar-list-item-link'>
          <li>Projects</li>
        </Link>
        <Link to={"/createTicket"} className='sidebar-list-item-link'>
          <li>Create Ticket</li>
        </Link>
        <Link to={"/createProject"} className='sidebar-list-item-link'>
          <li>Create Project</li>
        </Link>
      </ul>
    </div>
  );
}
