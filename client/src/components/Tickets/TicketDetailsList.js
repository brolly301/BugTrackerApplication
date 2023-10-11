import React from "react";
import TicketDetailsShow from "./TicketDetailsShow";
import useTicketContext from "../../hooks/useTicketContext";

export default function TicketDetailsList() {
  const { state } = useTicketContext();

  const renderedList = state.tickets.map((ticket) => {
    return <TicketDetailsShow key={ticket.id} ticket={ticket} />;
  });

  return <div>{renderedList}</div>;
}
