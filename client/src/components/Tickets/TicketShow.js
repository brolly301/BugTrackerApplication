import React from "react";
import "../../CSS/Tickets/TicketShow.css";

export default function TicketShow({ ticket }) {
  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.project?.name}</td>
      <td>
        <p className="tickets-list-pill">{ticket.issueType}</p>
      </td>
      <td>
        <p className="tickets-list-pill">{ticket.priority}</p>
      </td>
      <td>
        <p className="tickets-list-pill">{ticket.status}</p>
      </td>
      <td>
        {ticket.assignee?.firstName} {ticket.assignee?.surname}
      </td>
    </>
  );
}
