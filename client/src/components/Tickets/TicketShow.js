import React from "react";
import "../../CSS/Tickets/TicketShow.css";

export default function TicketShow({ ticket }) {
  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.project?.name}</td>
      <td>
        <p className="tickets-issueType-bug">{ticket.issueType}</p>
      </td>
      <td>
        <p className="tickets-priority-low">{ticket.priority}</p>
      </td>
      <td>
        <p className="tickets-status-open">{ticket.status}</p>
      </td>
      <td>
        {ticket.assignee?.firstName} {ticket.assignee?.surname}
      </td>
    </>
  );
}
