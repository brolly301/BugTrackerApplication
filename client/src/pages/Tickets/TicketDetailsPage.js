import React from "react";
import { useLocation } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";
import TicketShow from "../../components/Tickets/TicketDetails/TicketShow";

export default function TicketDetailsPage() {
  const { state } = useTicketContext();
  const location = useLocation();
  const ticket = state.find(
    (ticket) => ticket._id === location.state.ticket._id
  );

  return (
    <div>
      <h1>Ticket Details</h1>
      <TicketShow ticket={ticket} />
    </div>
  );
}
