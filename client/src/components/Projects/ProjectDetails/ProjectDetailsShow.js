import React, { useEffect, useState } from "react";
import ProjectEditForm from "./ProjectEditForm";
import useProjectContext from "../../../hooks/useProjectContext";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Projects/ProjectDetailsShow.css";
import SearchBar from "../../SearchBar";
import ProjectTeamMembersList from "./ProjectTeamMembersList";
import { toast } from "react-toastify";
import DeleteModal from "../../Modals/DeleteModal";
import { ProjectManagerDetails } from "../../../functions/ObjectData";

export default function ProjectDetailsShow({ project }) {
  const projectManager = ProjectManagerDetails(project?.projectManager);

  const [isEdit, setIsEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteProject } = useProjectContext();
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProject(project.projectid, () => {
      redirect("/allProjects");
      toast.success("Project deleted successfully");
      setModalVisible(false);
    });
  };

  let content = (
    <div className='project-details-tile-container'>
      <DeleteModal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onDelete={handleSubmit}
        type='Project'
      />
      <h1>Project Details</h1>
      <div className='project-details-tile-data-container'>
        <div className='project-details-tile-details-container'>
          <label>Name</label>
          <h4>{project?.name}</h4>
          <label>Description</label>
          <h4>{project?.description}</h4>
          <label>Project Manager</label>
          <h4>
            {projectManager?.firstName} {projectManager?.surname}
          </h4>
        </div>
        <div className='project-details-tile-members-container'>
          <label htmlFor=''>Team Members</label>
          <SearchBar />
          <div style={{ height: "10px" }} />
          <ProjectTeamMembersList teamMembers={project?.teamMembers} />
        </div>
      </div>
      <div className='project-details-tile-button-container'>
        <button type='button' onClick={handleEdit}>
          Edit
        </button>
        <button onClick={() => setModalVisible(!modalVisible)}>Delete</button>
      </div>
    </div>
  );

  if (isEdit)
    content = <ProjectEditForm project={project} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
