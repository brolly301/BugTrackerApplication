import React, { useState } from "react";
import MyTicketsList from "../../components/Tickets/MyTicketsList";
import SearchBar from "../../components/SearchBar";
import FilterBy from "../../components/FilterBy";
import {
  ticketPriorityFilters,
  ticketStatusFilters,
  ticketTypeFilters,
} from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";
import useTicketContext from "../../hooks/useTicketContext";
import useUserContext from "../../hooks/useUserContext";
import { AssigneeDetails } from "../../functions/ObjectData";

export default function MyTicketsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserContext();
  const { state: tickets } = useTicketContext();

  const searchBy = tickets?.filter((ticket) => {
    const assignee = AssigneeDetails(ticket?.assignee);
    if (assignee?._id === state?.userDetails?._id) {
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
    }
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
