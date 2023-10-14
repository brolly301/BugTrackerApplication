import React from "react";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";

export default function TicketShow({ ticket }) {
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();

  const assignee = state.allUsers.find((user) => user._id === ticket.assignee);
  const project = projects.find((project) => project._id === ticket.project);

  return (
    <>
      <td>{ticket.summary}</td>
      <td>{ticket.description}</td>
      <td>{ticket.status}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.issueType}</td>
      <td>{project?.name}</td>
      <td>{assignee?.firstName}</td>
    </>
  );
}
