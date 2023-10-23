import React from "react";
import "../../../../CSS/ManageUsers/UserTicketsTile.css";
import TicketsList from "../../../Tickets/TicketList";
import useTicketContext from "../../../../hooks/useTicketContext";

export default function UserTicketsTile({ user }) {
  const { state } = useTicketContext();

  const userTickets = state?.filter((ticket) => ticket.assignee === user._id);
  console.log(userTickets);

  return (
    <div className="user-tickets-tile-container">
      <TicketsList state={userTickets} />
    </div>
  );
}
