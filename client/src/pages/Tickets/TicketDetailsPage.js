import React from "react";
import { useLocation } from "react-router-dom";

export default function TicketDetailsPage() {
  const location = useLocation();
  const ticket = location.state.ticket;
  return <div>{ticket.summary}</div>;
}
