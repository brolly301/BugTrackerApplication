import React, { useState } from "react";
import TicketList from "../../components/Tickets/TicketList";
import SearchBar from "../../components/SearchBar";
import useTicketContext from "../../hooks/useTicketContext";
import {
  ticketPriorityFilters,
  ticketStatusFilters,
  ticketTypeFilters,
} from "../../functions/FilterOptions";
import FilterBy from "../../components/FilterBy";
import "../../CSS/Pages/TicketsPage.css";
import "../../CSS/Misc/Pagination.css";
import HeaderPanel from "../../components/HeaderPanel";
import { useLocation } from "react-router-dom";
import Placeholder from "../../components/Placeholder";
import { Pagination } from "../../functions/Pagination";

export default function TicketsPage() {
  const { state } = useTicketContext();
  const [search, setSearch] = useState("");
  const [selectedStatusFilters, setSelectedStatusFilters] = useState([]);
  const [selectedPriorityFilters, setSelectedPriorityFilters] = useState([]);
  const [selectedTypeFilters, setSelectedTypeFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(10);

  const searchBy = state?.filter((ticket) => {
    const summaryMatch = ticket?.summary
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const statusFilterMatch =
      selectedStatusFilters.length === 0 ||
      selectedStatusFilters.includes(ticket.status);
    const priorityFilterMatch =
      selectedPriorityFilters.length === 0 ||
      selectedPriorityFilters.includes(ticket.priority);
    const typeFilterMatch =
      selectedTypeFilters.length === 0 ||
      selectedTypeFilters.includes(ticket.issueType);

    return (
      summaryMatch &&
      statusFilterMatch &&
      priorityFilterMatch &&
      typeFilterMatch
    );
  });

  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, ticketsPerPage, searchBy);

  return (
    <HeaderPanel title={"All Tickets"}>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />

        <FilterBy
          setFilter={(value) => setSelectedStatusFilters(value)}
          filterOptions={ticketStatusFilters}
          value={"Status"}
        />
        <view style={{ margin: "0px 5px 0px 5px" }} />

        <FilterBy
          setFilter={(value) => setSelectedPriorityFilters(value)}
          filterOptions={ticketPriorityFilters}
          value={"Priority"}
        />
        <view style={{ margin: "0px 5px 0px 5px" }} />

        <FilterBy
          setFilter={(value) => setSelectedTypeFilters(value)}
          filterOptions={ticketTypeFilters}
          value={"Issue Type"}
        />
      </div>
      <TicketList state={currentTickets} />
      {searchBy?.length < 1 ? (
        <Placeholder
          type={"ticket"}
          buttonText={"submit"}
          link={"/submitTicket"}
        />
      ) : null}
      <div className="pagination-container">
        <div className="pagination-previous-button">
          {indexOfFirstTicket === 0 ? null : (
            <button onClick={() => paginate(currentPage - 1)}>Previous</button>
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
            <button onClick={() => paginate(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>
    </HeaderPanel>
  );
}
