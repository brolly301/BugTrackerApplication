import React, { useState } from "react";
import ProjectEditForm from "./ProjectEditForm";
import useProjectContext from "../../../hooks/useProjectContext";
import { useNavigate } from "react-router-dom";

export default function ProjectShow({ project }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteProject } = useProjectContext();
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProject(project._id, () => {
      redirect("/allProjects");
    });
  };

  let content = (
    <form onSubmit={handleSubmit}>
      <h4>{project?.name}</h4>
      <h4>{project?.description}</h4>
      <h4>
        {project?.projectManager?.firstName} {project?.projectManager?.surname}
      </h4>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="submit">Delete</button>
    </form>
  );

  if (isEdit)
    content = <ProjectEditForm project={project} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
