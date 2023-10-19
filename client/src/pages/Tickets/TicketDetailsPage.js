import React from "react";
import { useLocation } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";
import TicketShow from "../../components/Tickets/TicketDetails/TicketShow";
import HeaderPanel from "../../components/HeaderPanel";

export default function TicketDetailsPage() {
  const { state } = useTicketContext();
  const location = useLocation();
  const ticket = state.find(
    (ticket) => ticket._id === location.state.ticket._id
  );

  return (
    <HeaderPanel title={"Ticket Details"}>
      <TicketShow ticket={ticket} />
    </HeaderPanel>
  );
}
