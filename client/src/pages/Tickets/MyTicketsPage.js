import React, { useState } from "react";
import MyTicketsList from "../../components/Tickets/MyTicketsList";
import SearchBar from "../../components/SearchBar";
import useUserTicketsContext from "../../hooks/useUserTicketsContext";
import FilterBy from "../../components/FilterBy";
import {
  ticketPriorityFilters,
  ticketStatusFilters,
  ticketTypeFilters,
} from "../../functions/FilterOptions";

export default function MyTicketsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserTicketsContext();

  const searchBy = state?.filter((ticket) => {
    const summaryMatch = ticket.summary
      .toLowerCase()
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
      <h1>My Tickets</h1>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBy setFilter={setFilter} filterOptions={ticketStatusFilters} />
        <FilterBy setFilter={setFilter} filterOptions={ticketPriorityFilters} />
        <FilterBy setFilter={setFilter} filterOptions={ticketTypeFilters} />
      </div>
      <MyTicketsList state={searchBy} />
    </div>
  );
}
