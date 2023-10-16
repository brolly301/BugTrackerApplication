import React, { useState } from "react";
import UserList from "../../components/ManagerUsers/UserList";
import "../../CSS/Pages/ManageUserPage.css";
import SearchBar from "../../components/SearchBar";
import useUserContext from "../../hooks/useUserContext";
import FilterBy from "../../components/FilterBy";
import { manageUserFilters } from "../../functions/FilterOptions";

export default function ManageUsersPage() {
  const { state } = useUserContext();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const searchBy = state?.allUsers?.filter((user) => {
    const fullName = `${user.firstName} ${user.surname}`.toLowerCase();
    return (
      (fullName.match(search.toLowerCase()) && filter === "") ||
      (fullName.match(search.toLowerCase()) && user.role === filter)
    );
  });

  return (
    <div className="manage-user-page-container">
      <h1>Manage Users</h1>
      <div className="manage-user-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBy filterOptions={manageUserFilters} setFilter={setFilter} />
      </div>
      <UserList state={searchBy} />
    </div>
  );
}
