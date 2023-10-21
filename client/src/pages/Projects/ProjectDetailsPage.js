import React from "react";
import { useLocation } from "react-router-dom";
import useProjectContext from "../../hooks/useProjectContext";
import ProjectDetailsShow from "../../components/Projects/ProjectDetails/ProjectDetailsShow";
import HeaderPanel from "../../components/HeaderPanel";
import "../../CSS/Pages/ProjectDetailsPage.css";
import ProjectTicketShow from "../../components/Projects/ProjectDetails/ProjectTicketShow";

export default function ProjectDetailsPage() {
  const { state } = useProjectContext();
  const location = useLocation();
  const project = state.find(
    (project) => project._id === location.state.project._id
  );

  return (
    <HeaderPanel title={"Project Details"}>
      <div className="project-details-page-container">
        <ProjectDetailsShow project={project} />
        <ProjectTicketShow project={project} />
      </div>
    </HeaderPanel>
  );
}
