import React, { useState } from "react";
import "../../../../CSS/ManageUsers/UserTicketsTile.css";
import TicketsList from "../../../Tickets/TicketList";
import useTicketContext from "../../../../hooks/useTicketContext";
import SearchBar from "../../../SearchBar";
import { AssigneeDetails } from "../../../../functions/ObjectData";
import { Pagination } from "../../../../functions/Pagination";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function UserTicketsTile({ user }) {
  const { state: tickets } = useTicketContext();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(2);

  const searchBy = tickets?.filter((ticket) => {
    const assignee = AssigneeDetails(ticket?.assignee);
    if (assignee?.userID === user.userID) {
      return ticket?.summary?.toLowerCase().includes(search.toLowerCase());
    }
  });

  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, ticketsPerPage, searchBy);

  return (
    <div className="user-tickets-tile-container">
      <h3 className="user-tickets-tile-title">Recent Tickets</h3>
      <div className="user-tickets-tile-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <TicketsList state={currentTickets} view={false} />
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
