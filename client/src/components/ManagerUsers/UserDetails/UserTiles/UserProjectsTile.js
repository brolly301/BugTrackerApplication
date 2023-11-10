import React, { useState } from "react";
import "../../../../CSS/ManageUsers/UserProjectsTile.css";
import ProjectList from "../../../Projects/ProjectList";
import useProjectContext from "../../../../hooks/useProjectContext";
import SearchBar from "../../../SearchBar";
import { Pagination } from "../../../../functions/Pagination";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function UserProjectsTile({ user }) {
  const { state: projects } = useProjectContext();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(2);

  const searchBy = projects?.filter((project) => {
    if (project?.teamMembers?.find((member) => member === user?.userID)) {
      return project?.name?.toLowerCase().includes(search.toLowerCase());
    }
  });

  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, ticketsPerPage, searchBy);

  return (
    <div className="user-projects-tile-container">
      <h3 className="user-projects-tile-title">Recent Projects</h3>
      <SearchBar search={search} setSearch={setSearch} />
      <div>
        <ProjectList state={currentTickets} />
        <div className="pagination-container">
          <div className="pagination-previous-button">
            {indexOfFirstTicket === 0 ? null : (
              <PiCaretLeft onClick={() => paginate(currentPage - 1)} />
            )}
          </div>
          <div className="pagination-page-number">
            {searchBy.length < ticketsPerPage
              ? null
              : `${currentPage} of ${Math.ceil(
                  searchBy.length / ticketsPerPage
                )}`}
          </div>
          <div className="pagination-next-button">
            {indexOfLastTicket >= searchBy.length ? null : (
              <PiCaretRight onClick={() => paginate(currentPage + 1)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
