import React from "react";
import "../../CSS/Projects/ProjectShow.css";

export default function ProjectShow({ project }) {
  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{`${project.projectManager?.firstName} ${project.projectManager?.surname}`}</td>
      <td>
        <p className="project-members">{project.teamMembers.length}</p>
      </td>
      <td>
        <p className="project-tickets">{project.tickets.length}</p>
      </td>
    </>
  );
}
