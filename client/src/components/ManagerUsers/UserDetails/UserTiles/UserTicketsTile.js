import React from "react";
import "../../../../CSS/ManageUsers/UserTicketsTile.css";
import TicketsList from "../../../Tickets/TicketList";
import useTicketContext from "../../../../hooks/useTicketContext";
import SearchBar from "../../../SearchBar";

export default function UserTicketsTile({ user }) {
  const { state } = useTicketContext();

  const userTickets = state
    ?.filter((ticket) => ticket.assignee?._id === user?._id)
    .slice(0, 2);

  return (
    <div className="user-tickets-tile-container">
      <h3 className="user-tickets-tile-title">Recent Tickets</h3>
      <div className="user-tickets-tile-search-container">
        <SearchBar />
        <TicketsList state={userTickets} view={false} />
      </div>
    </div>
  );
}
