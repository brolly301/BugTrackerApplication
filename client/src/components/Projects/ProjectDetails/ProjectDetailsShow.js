import React, { useState } from "react";
import ProjectEditForm from "./ProjectEditForm";
import useProjectContext from "../../../hooks/useProjectContext";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Projects/ProjectDetailsShow.css";
import SearchBar from "../../SearchBar";
import ProjectTeamMembersList from "./ProjectTeamMembersList";
import { toast } from "react-toastify";

export default function ProjectDetailsShow({ project }) {
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
      toast.success("Project deleted successfully");
    });
  };

  let content = (
    <div className="project-details-tile-container">
      <h1>Project Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="project-details-tile-data-container">
          <div className="project-details-tile-details-container">
            <label>Name</label>
            <h4>{project?.name}</h4>
            <label>Description</label>
            <h4>{project?.description}</h4>
            <label>Manager</label>
            <h4>
              {project?.projectManager?.firstName}{" "}
              {project?.projectManager?.surname}
            </h4>
          </div>
          <div className="project-details-tile-members-container">
            <label htmlFor="">Team Members</label>
            <SearchBar />
            <div style={{ height: "10px" }} />
            <ProjectTeamMembersList teamMembers={project?.teamMembers} />
          </div>
        </div>
        <div className="project-details-tile-button-container">
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <button type="submit">Delete</button>
        </div>
      </form>
    </div>
  );

  if (isEdit)
    content = <ProjectEditForm project={project} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
