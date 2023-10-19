import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Misc/Sidebar.css";
import Fly from "../images/fly.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoBugOutline } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { BsMotherboard, BsPencil } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-sticky">
        <div className="sidebar-title-container">
          <img className="sidebar-title-icon" src={Fly} />
          <h1 className="sidebar-title">Fly Trap</h1>
        </div>
        <hr className="sidebar-hr" />
        <ul className="sidebar-list">
          <Link to={"/dashboard"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <LuLayoutDashboard className="sidebar-icon" />
            </div>
            <li>Dashboard</li>
          </Link>
          <Link to={"/allTickets"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <HiOutlineTicket className="sidebar-icon" />
            </div>
            <li>All Tickets</li>
          </Link>
          <Link to={"/myTickets"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <LiaClipboardListSolid className="sidebar-icon" />
            </div>
            <li>My Tickets</li>
          </Link>
          <Link to={"/submitTicket"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <IoBugOutline className="sidebar-icon" />
            </div>
            <li>Submit Ticket</li>
          </Link>
          <Link to={"/allProjects"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <BsMotherboard className="sidebar-icon" />
            </div>

            <li>All Projects</li>
          </Link>
          <Link to={"/myProjects"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <VscProject className="sidebar-icon" />
            </div>

            <li>My Projects</li>
          </Link>
          <Link to={"/createProject"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <BsPencil className="sidebar-icon" />
            </div>
            <li>Create Project</li>
          </Link>
          <Link to={"/manageUsers"} className="sidebar-list-item-link">
            <div className="sidebar-icon-container">
              <FaUsers className="sidebar-icon" />
            </div>
            <li>Manage Users</li>
          </Link>
        </ul>

        <hr className="sidebar-hr" />
      </div>
    </div>
  );
}
