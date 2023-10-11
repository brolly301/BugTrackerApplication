import React from "react";
import useProjectContext from "../../hooks/useProjectContext";
import ProjectShow from "./ProjectShow";

export default function ProjectList() {
  const { state } = useProjectContext();

  const renderedList = state.map((project) => {
    return <ProjectShow key={project._id} project={project} />;
  });

  return <div>{renderedList}</div>;
}
