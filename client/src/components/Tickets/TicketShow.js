import React from "react";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";

export default function TicketShow({ ticket }) {
  console.log(ticket);

  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.description}</td>
      <td>{ticket.status}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.issueType}</td>
      <td>{ticket.project?.name}</td>
      <td>
        {ticket.assignee?.firstName} {ticket.assignee?.surname}
      </td>
    </>
  );
}
