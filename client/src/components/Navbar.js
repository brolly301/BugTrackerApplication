import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../CSS/Misc/Navbar.css";
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import Fly from "../images/fly.png";

export default function Navbar() {
  const { logout } = useUserContext();
  const redirect = useNavigate();

  const handleLogout = async () => {
    await logout(() => {
      redirect("/");
    });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title-container">
        <h1 className="navbar-title">Fly Trap</h1>
        <img className="navbar-icon" src={Fly} />
      </div>
      <ul className="navbar-list">
        <Link to={"/profile"} className="navbar-list-item">
          <li>Profile</li>
        </Link>
        <Link to={"/dashboard"} className="navbar-list-item">
          <li>Dashboard</li>
        </Link>
        <Link className="navbar-list-item" onClick={handleLogout}>
          <li>Logout</li>
        </Link>
      </ul>
      <div style={{ display: "none" }}>
        <Outlet />
      </div>
    </div>
  );
}
