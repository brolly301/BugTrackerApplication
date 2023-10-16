import React from "react";
import useUserContext from "../../hooks/useUserContext";

export default function ProjectShow({ project }) {
  const { state } = useUserContext();

  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{`${project.projectManager?.firstName} ${project.projectManager?.surname}`}</td>
      <td>{project.teamMembers.length}</td>
      <td>{project.tickets.length}</td>
    </>
  );
}
