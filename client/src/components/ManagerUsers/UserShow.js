import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "../../CSS/ManageUsers/UserShow.css";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";

export default function UserShow({ user }) {
  return (
    <div className="user-show-container">
      <div className="user-show-name-container">
        <h2>
          {user?.firstName} {user?.surname}
        </h2>
        <h3>{user.role || "Developer"}</h3>
      </div>
      <div className="user-show-email-container">
        <div className="user-show-icon-container">
          <FaPhone className="user-show-icon" />
          <h4>{user.phoneNumber}</h4>
        </div>
        <div className="user-show-icon-container">
          <FaRegEnvelope className="user-show-icon" />
          <h4>{user.emailAddress}</h4>
        </div>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/manageUsers/user/${user.userID}`}
        state={{ user: user }}>
        <button className="user-show-button">View</button>
      </Link>
    </div>
  );
}
