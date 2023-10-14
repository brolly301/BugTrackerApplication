import React, { useState } from "react";
import UserList from "../../components/ManagerUsers/UserList";
import "../../CSS/Pages/ManageUserPage.css";
import SearchBar from "../../components/SearchBar";
import useUserContext from "../../hooks/useUserContext";

export default function ManageUsersPage() {
  const { state } = useUserContext();
  const [search, setSearch] = useState("");

  const searchBy = state?.allUsers?.filter((user) => {
    const fullName = `${user.firstName} ${user.surname}`.toLowerCase();
    return fullName.match(search.toLowerCase());
  });

  return (
    <div className="manage-user-page-container">
      <h1>Manage Users</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <UserList state={searchBy} />
    </div>
  );
}
