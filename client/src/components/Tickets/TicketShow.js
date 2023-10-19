import React from "react";
import "../../CSS/Tickets/TicketShow.css";

export default function TicketShow({ ticket }) {
  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.project?.name}</td>
      <td>{ticket.issueType}</td>
      <td>{ticket.priority}</td>
      <div>
        <td className="tickets-status">{ticket.status}</td>
      </div>
      <td>
        {ticket.assignee?.firstName} {ticket.assignee?.surname}
      </td>
    </>
  );
}
