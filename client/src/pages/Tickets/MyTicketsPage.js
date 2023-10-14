import React, { useState } from "react";
import MyTicketsList from "../../components/Tickets/MyTicketsList";
import SearchBar from "../../components/SearchBar";
import useUserTicketsContext from "../../hooks/useUserTicketsContext";

export default function MyTicketsPage() {
  const [search, setSearch] = useState("");
  const { state } = useUserTicketsContext();

  const searchBy = state?.filter((ticket) => {
    return ticket.summary.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>My Tickets</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <MyTicketsList state={searchBy} />
    </div>
  );
}
