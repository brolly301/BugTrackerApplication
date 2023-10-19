import React from "react";
import { useLocation } from "react-router-dom";
import useProjectContext from "../../hooks/useProjectContext";
import ProjectShow from "../../components/Projects/ProjectDetails/ProjectShow";
import HeaderPanel from "../../components/HeaderPanel";

export default function ProjectDetailsPage() {
  const { state } = useProjectContext();
  const location = useLocation();
  const project = state.find(
    (project) => project._id === location.state.project._id
  );

  return (
    <HeaderPanel title={"Project Details"}>
      <ProjectShow project={project} />
    </HeaderPanel>
  );
}
