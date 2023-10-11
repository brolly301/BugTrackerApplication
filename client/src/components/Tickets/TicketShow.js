import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function TicketShow({ ticket }) {
  return (
    <div>
      <h4>{ticket.summary}</h4>
      <Link to={`/allTickets/tickets/${ticket._id}`} state={{ ticket: ticket }}>
        <Button label={"View"} />
      </Link>
    </div>
  );
}
