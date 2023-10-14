import React from "react";
import useUserContext from "../../hooks/useUserContext";
import useTicketContext from "../../hooks/useTicketContext";

export default function ProjectShow({ project }) {
  const { state } = useUserContext();
  const { state: tickets } = useTicketContext();

  const projectManager = state.allUsers.find(
    (user) => user._id === project.projectManager
  );

  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{`${projectManager?.firstName} ${projectManager?.surname}`}</td>
      <td>{project.teamMembers.length}</td>
      <td>{project.tickets.length}</td>
    </>
  );
}
