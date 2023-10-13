import React from "react";

export default function TicketShow({ ticket }) {
  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.description}</td>
      <td>{ticket.status}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.issueType}</td>
      <td>{ticket.project}</td>
      <td>{ticket.assignee}</td>
    </>
  );
}
