import React, { useState } from "react";
import ProjectEditForm from "./ProjectEditForm";

export default function ProjectShow({ project }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let content = (
    <form onSubmit={handleSubmit}>
      <h4>{project?.name}</h4>
      <h4>{project?.description}</h4>
      <h4>{project?.projectManager}</h4>
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
