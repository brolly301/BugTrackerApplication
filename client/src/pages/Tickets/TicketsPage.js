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
import HeaderPanel from "../../components/HeaderPanel";
import { useLocation } from "react-router-dom";
import Placeholder from "../../components/Placeholder";

export default function TicketsPage() {
  const dashboardFilter = useLocation().state?.filter;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(() =>
    dashboardFilter ? dashboardFilter : ""
  );
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
    <HeaderPanel title={"All Tickets"}>
      <div className='ticket-search-container'>
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy
          setFilter={setFilter}
          filterOptions={ticketStatusFilters}
          value={"Status"}
        />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy
          setFilter={setFilter}
          filterOptions={ticketPriorityFilters}
          value={"Priority"}
        />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy
          setFilter={setFilter}
          filterOptions={ticketTypeFilters}
          value={"Issue Type"}
        />
      </div>
      <TicketList state={searchBy} />
      {searchBy?.length < 1 ? (
        <Placeholder
          type={"ticket"}
          buttonText={"submit"}
          link={"/submitTicket"}
        />
      ) : null}
    </HeaderPanel>
  );
}
