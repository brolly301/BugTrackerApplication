import React, { useState } from "react";
import UserList from "../../components/ManagerUsers/UserList";
import "../../CSS/Pages/ManageUserPage.css";
import SearchBar from "../../components/SearchBar";
import useUserContext from "../../hooks/useUserContext";
import FilterBy from "../../components/FilterBy";
import { manageUserFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";

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
    <HeaderPanel title={"Manage Users"}>
      <div className="manage-user-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy filterOptions={manageUserFilters} setFilter={setFilter} />
      </div>
      <UserList state={searchBy} />
    </HeaderPanel>
  );
}
