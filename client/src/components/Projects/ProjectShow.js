import React from "react";
import "../../CSS/Projects/ProjectShow.css";
import { Link } from "react-router-dom";
import { ProjectManagerDetails } from "../../functions/ObjectData";

export default function ProjectShow({ project }) {
  const projectManager = ProjectManagerDetails(project.projectManager);

  return (
    <>
      <td className="projects--table-text">{project?.name}</td>
      <td className="projects--table-text">{project?.description}</td>
      <td className="projects--table-text">{`${projectManager?.firstName} ${projectManager?.surname}`}</td>
      <td>
        <p className="project-list-pill members">
          {project?.teamMembers?.length}
        </p>
      </td>
      <td>
        <p className="project-list-pill tickets">{project?.tickets?.length}</p>
      </td>
      <Link to={`/allProjects/projects/${project?.projectID}`}>
        <button className="ticket-view-button">View</button>
      </Link>
    </>
  );
}
