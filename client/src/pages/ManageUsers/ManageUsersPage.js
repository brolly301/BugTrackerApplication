import React from "react";
import UserList from "../../components/ManagerUsers/UserList";
import "../../CSS/Pages/ManageUserPage.css";

export default function ManageUsersPage() {
  return (
    <div className="manage-user-page-container">
      <h1>Manage Users</h1>
      <UserList />
    </div>
  );
}
