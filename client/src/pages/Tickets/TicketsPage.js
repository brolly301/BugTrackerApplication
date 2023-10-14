import React, { useState } from "react";
import TicketList from "../../components/Tickets/TicketList";
import SearchBar from "../../components/SearchBar";
import useTicketContext from "../../hooks/useTicketContext";

export default function TicketsPage() {
  const [search, setSearch] = useState("");
  const { state } = useTicketContext();

  const searchBy = state?.filter((ticket) => {
    return ticket.summary.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Tickets</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <TicketList state={searchBy} />
    </div>
  );
}
