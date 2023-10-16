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

export default function TicketsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useTicketContext();

  const searchBy = state?.filter((ticket) => {
    const summaryMatch = ticket?.summary
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return (
      (summaryMatch && filter === "") ||
      (summaryMatch &&
        (ticket.status === filter ||
          ticket.priority === filter ||
          ticket.issueType === filter))
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBy setFilter={setFilter} filterOptions={ticketStatusFilters} />
        <FilterBy setFilter={setFilter} filterOptions={ticketPriorityFilters} />
        <FilterBy setFilter={setFilter} filterOptions={ticketTypeFilters} />
      </div>
      <TicketList state={searchBy} />
    </div>
  );
}
