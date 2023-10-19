import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../CSS/Misc/Navbar.css";
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function Navbar({ currentPage }) {
  const { logout } = useUserContext();
  const redirect = useNavigate();

  console.log(currentPage);

  const handleLogout = async () => {
    await logout(() => {
      redirect("/");
    });
  };

  return (
    <div className="navbar-sticky">
      <div className="navbar-container">
        <ul className="navbar-list">
          <Link to={"/profile"} className="navbar-list-item">
            <div className="navbar-icon-container">
              <FaRegUserCircle className="navbar-icon" />
            </div>
            <li>Profile</li>
          </Link>

          <Link className="navbar-list-item" onClick={handleLogout}>
            <div className="navbar-icon-container">
              <FiLogOut className="navbar-icon" />
            </div>
            <li>Logout</li>
          </Link>
        </ul>
        <div style={{ display: "none" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
