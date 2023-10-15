import React from "react";
import { useLocation } from "react-router-dom";
import useProjectContext from "../../hooks/useProjectContext";
import ProjectShow from "../../components/Projects/ProjectDetails/ProjectShow";

export default function ProjectDetailsPage() {
  const { state } = useProjectContext();
  const location = useLocation();
  const project = state.find(
    (project) => project._id === location.state.project._id
  );

  return (
    <div>
      <h1>Project Details</h1>
      <ProjectShow project={project} />
    </div>
  );
}
