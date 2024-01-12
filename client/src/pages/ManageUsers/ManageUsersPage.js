import React, { useState } from "react";
import UserList from "../../components/ManagerUsers/UserList";
import "../../CSS/Pages/ManageUserPage.css";
import SearchBar from "../../components/SearchBar";
import useUserContext from "../../hooks/useUserContext";
import FilterBy from "../../components/FilterBy";
import { manageUserFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";
import { Link } from "react-router-dom";
import { Pagination } from "../../functions/Pagination";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function ManageUsersPage() {
  const { state } = useUserContext();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const searchBy = state?.allUsers?.filter((user) => {
    const fullName = `${user.firstName} ${user.surname}`.toLowerCase();
    return (
      (fullName.match(search.toLowerCase()) && filter === "") ||
      (fullName.match(search.toLowerCase()) && user.role === filter)
    );
  });

  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, usersPerPage, searchBy);

  return (
    <HeaderPanel title={"Manage Users"}>
      <div className="manage-user-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy
          filterOptions={manageUserFilters}
          setFilter={setFilter}
          value={"Role"}
        />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <Link to={"/manageUsers/createUser"}>
          <button>Add User</button>
        </Link>
      </div>
      <UserList state={currentTickets} />
      <div className="pagination-container">
        <div className="pagination-previous-button">
          {indexOfFirstTicket === 0 ? null : (
            <PiCaretLeft onClick={() => paginate(currentPage - 1)} />
          )}
        </div>
        <div className="pagination-page-number">
          {searchBy.length < usersPerPage
            ? null
            : `${currentPage} of ${Math.ceil(searchBy.length / usersPerPage)}`}
        </div>
        <div className="pagination-next-button">
          {indexOfLastTicket >= searchBy.length ? null : (
            <PiCaretRight onClick={() => paginate(currentPage + 1)} />
          )}
        </div>
      </div>
    </HeaderPanel>
  );
}
