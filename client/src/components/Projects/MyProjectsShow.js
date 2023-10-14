import React from "react";
import useUserContext from "../../hooks/useUserContext";

export default function MyProjectsShow({ project }) {
  const { state } = useUserContext();

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