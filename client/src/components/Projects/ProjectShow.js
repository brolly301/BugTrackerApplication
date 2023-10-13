import React from "react";

export default function ProjectShow({ project }) {
  console.log(project);
  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{project.projectManager}</td>
      <td>{0}</td>
    </>
  );
}
