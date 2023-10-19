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
import HeaderPanel from "../../components/HeaderPanel";

export default function MyTicketsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserTicketsContext();

  const searchBy = state?.filter((ticket) => {
    const summaryMatch = ticket.summary
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
    <HeaderPanel title={"My Tickets"}>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy setFilter={setFilter} filterOptions={ticketStatusFilters} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy setFilter={setFilter} filterOptions={ticketPriorityFilters} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy setFilter={setFilter} filterOptions={ticketTypeFilters} />
      </div>
      <MyTicketsList state={searchBy} />
    </HeaderPanel>
  );
}
