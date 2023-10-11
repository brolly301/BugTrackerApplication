import React from "react";

export default function ProjectDetailsShow({ project }) {
  return (
    <div>
      <h4>{project.name}</h4>
      <h4>{project.description}</h4>
    </div>
  );
}
