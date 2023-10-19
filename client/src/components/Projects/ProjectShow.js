import React from "react";
import "../../CSS/Projects/ProjectShow.css";

export default function ProjectShow({ project }) {
  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{`${project.projectManager?.firstName} ${project.projectManager?.surname}`}</td>
      <td>
        <p className="project-list-pill members">
          {project.teamMembers.length}
        </p>
      </td>
      <td>
        <p className="project-list-pill tickets">{project.tickets.length}</p>
      </td>
    </>
  );
}
