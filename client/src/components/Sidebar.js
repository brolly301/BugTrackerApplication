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
import { FaUsers, FaProjectDiagram } from "react-icons/fa";
import useUserContext from "../hooks/useUserContext";

export default function Sidebar() {
  const { state } = useUserContext();

  const rolePermissions = {
    Admin: [
      "/dashboard",
      "/kanban",
      "/allTickets",
      "/myTickets",
      "/submitTicket",
      "/allProjects",
      "/myProjects",
      "/createProject",
      "/manageUsers",
    ],
    "Project Manager": [
      "/allTickets",
      "/myTickets",
      "/submitTicket",
      "/allProjects",
      "/myProjects",
      "/createProject",
    ],
    Developer: [
      "/allTickets",
      "/myTickets",
      "/submitTicket",
      "/allProjects",
      "/myProjects",
    ],
    "Test Engineer": [
      "/allTickets",
      "/myTickets",
      "/submitTicket",
      "/allProjects",
      "/myProjects",
    ],
    Support: [
      "/allTickets",
      "/myTickets",
      "/submitTicket",
      "/allProjects",
      "/myProjects",
    ],
  };

  const userRole = state?.userDetails?.role;

  const allowedPages = rolePermissions[userRole];
  // Get the allowed pages for the user's role

  return (
    <div className="sidebar-container">
      <div className="sidebar-sticky">
        <div className="sidebar-title-container">
          <img className="sidebar-title-icon" src={Fly} />
          <h1 className="sidebar-title">Fly Trap</h1>
        </div>
        <hr className="sidebar-hr" />
        <ul className="sidebar-list">
          {allowedPages && allowedPages.includes("/dashboard") && (
            <Link to={"/dashboard"} className="sidebar-list-item-link">
              <div className="sidebar-icon-container">
                <LuLayoutDashboard className="sidebar-icon" />
              </div>
              <li>Dashboard</li>
            </Link>
          )}
          {allowedPages && allowedPages.includes("/kanban") && (
            <Link to={"/kanban"} className="sidebar-list-item-link">
              <div className="sidebar-icon-container">
                <VscProject className="sidebar-icon" />
              </div>
              <li>Kanban</li>
            </Link>
          )}

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
              <FaProjectDiagram className="sidebar-icon" />
            </div>
            <li>My Projects</li>
          </Link>
          {allowedPages && allowedPages.includes("/createProject") && (
            <Link to={"/createProject"} className="sidebar-list-item-link">
              <div className="sidebar-icon-container">
                <BsPencil className="sidebar-icon" />
              </div>
              <li>Create Project</li>
            </Link>
          )}
          {allowedPages && allowedPages.includes("/manageUsers") && (
            <Link to={"/manageUsers"} className="sidebar-list-item-link">
              <div className="sidebar-icon-container">
                <FaUsers className="sidebar-icon" />
              </div>
              <li>Manage Users</li>
            </Link>
          )}
        </ul>

        <hr className="sidebar-hr" />
      </div>
    </div>
  );
}
