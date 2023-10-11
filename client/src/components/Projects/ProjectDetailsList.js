import React from "react";
import ProjectDetailsShow from "./ProjectDetailsShow";
import useProjectContext from "../../hooks/useProjectContext";

export default function ProjectDetailsList() {
  const { state } = useProjectContext();

  const renderedList = state.projects.map((project) => {
    return <ProjectDetailsShow key={project.id} project={project} />;
  });

  return <div>{renderedList}</div>;
}
