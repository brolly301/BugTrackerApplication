import React from "react";
import "../../CSS/Projects/ProjectShow.css";
import { Link } from "react-router-dom";

export default function MyProjectsShow({ project }) {
  return (
    <>
      <td className="projects--table-text">{project.name}</td>
      <td className="projects--table-text">{project.description}</td>
      <td className="projects--table-text">{`${project.projectManager?.firstName} ${project.projectManager?.surname}`}</td>
      <td>
        <p className="project-list-pill members">
          {project.teamMembers.length}
        </p>
      </td>
      <td>
        <p className="project-list-pill tickets">{project.tickets.length}</p>
      </td>
      <Link
        to={`/allProjects/projects/${project.projectID}`}
        state={{ project: project }}>
        <button className="ticket-view-button">View</button>
      </Link>
    </>
  );
}
